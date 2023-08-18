from bs4 import BeautifulSoup
from urllib.request import Request, urlopen
import requests
import bs4
import re
from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer

from google_play_scraper import Sort, reviews_all
from google_play_scraper import app

import pandas as pd

import nltk
from nltk.collocations import *
from nltk import word_tokenize, pos_tag, pos_tag_sents, sent_tokenize
from nltk.stem import WordNetLemmatizer
from nltk.corpus import stopwords
import collections



def get_trending():
    app_packages = []
    app_name = ['facebook', 'instagram', 'snapchat', 'netflix', 'tiktok']

    for name in app_name:
        r = requests.get("https://play.google.com/store/search?q="+name)
        soup = bs4.BeautifulSoup(r.text, "html.parser")

        test_str = ''
        cnt = 0
        for link in soup.findAll('a'):                  # where ‘a’ is the indicator for links in html.
            if cnt == 6:
                test_str = link.get('href')
                break
            cnt = cnt + 1
        res = test_str.split('id=')[1]
        app_packages.append(res)

    trending_infos = []

    for ap in app_packages:
        info = app(ap, lang='en', country='us')
        # del info['comments']

        wanted_info = ['title', 'genre', 'header', 'icon', 'score']
        final_info = {}
        for key in info:
            if key in wanted_info:
                final_info[key] = info[key]

        final_info['score'] = round(final_info['score'], 1)
        trending_infos.append(final_info)

    return trending_infos

# Function to get searched appliaction link for scrapping
def get_link(app_name):
    r = requests.get("https://play.google.com/store/search?q="+app_name)
    soup = bs4.BeautifulSoup(r.text, "html.parser")

    test_str = ''
    cnt = 0
    for link in soup.findAll('a'):                  # where ‘a’ is the indicator for links in html.
        if cnt == 6:
            test_str = link.get('href')
            break
        cnt = cnt + 1

    res = test_str.split('id=')[1]
    
    return res

#Function for scrapping application information
def get_info(app_link):
    info = app(app_link)

    wanted_info = ['appId', 'description', 'developer', 'genre', 'histogram', 'icon', 'installs', 'ratings', 'released', 'reviews', 'score', 'summary', 'title', 'version']
    final_info = {}
    for key in info:
        if key in wanted_info:
            final_info[key] = info[key]

    final_info['ratings'] = final_info['histogram'][0] + final_info['histogram'][1] + final_info['histogram'][2] + final_info['histogram'][3] + final_info['histogram'][4]

    final_info['histogram_percentage'] = []

    for rating in final_info['histogram']:
        value = rating * 100 / final_info['ratings']
        value = round(value)
        final_info['histogram_percentage'].append(value)

    final_info['score'] = round(final_info['score'], 1)
    print(final_info["appId"])
    return final_info


#Function for scrapping all application reviews
def get_reviews(app_link):
    
    reviews = reviews_all(
                app_link,
                sleep_milliseconds=0, # defaults to 0
                lang='en', # defaults to 'en'
                country='us', # defaults to 'us'
                sort=Sort.NEWEST, # defaults to Sort.MOST_RELEVANT
                # filter_score_with=score # defaults to None(means all score)
    )

    remove_list = ['repliedAt', 'replyContent', 'reviewCreatedVersion', 'reviewId']
    count = [0, 0, 0]
    for rvs in reviews:
        rvs['sentiment'] = sentiment_mapping(rvs['content'])
        if rvs['sentiment'] == 'POSITIVE':
            count[0] += 1
        elif rvs['sentiment'] == 'MIXED':
            count[1] += 1
        else:
            count[2] += 1

        for key in remove_list:
            del rvs[key]

    reviews.insert(0, count)
    
    sum = 0
    for c in count:
        sum += c
    
    count_perc = []
    for c in count:
        value = round(c * 100 / sum)
        count_perc.append(value)

    reviews.insert(0, count_perc)
    return reviews


def sentiment_mapping(text):
    sid_obj = SentimentIntensityAnalyzer() 
    sentiment_dict = sid_obj.polarity_scores(text) 
    value = sentiment_dict['compound']  

    if value < 0.0:
        return 'NEGATIVE'
    if 0.0 <= value < 0.10:
        return 'MIXED'
    else:
        return 'POSITIVE'
    
def get_phrases():
    list = [{ 'id': 1, 'text': 'perform trackingrecording', 'score': 0.690800, 'sentiment': 'Positive'}, { 'id': 2, 'text': 'describe wild', 'score': 0.690800, 'sentiment': 'Positive'}, { 'id': 3, 'text': 'blue dot', 'score': 0.182770, 'sentiment': 'Positive'}, { 'id': 4, 'text': 'list trail', 'score': 0.690800, 'sentiment': 'Positive'}, { 'id': 5, 'text': 'icon leave', 'score': -0.040438, 'sentiment': 'Negative'}]

    return list
