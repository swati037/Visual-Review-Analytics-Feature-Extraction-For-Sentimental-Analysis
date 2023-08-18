from flask import Flask
# import datetime
import json
import pandas as pd
from tqdm import tqdm
import requests
import bs4
# import seaborn as sns
# import matplotlib.pyplot as plt

from pygments import highlight
from pygments.lexers import JsonLexer
from pygments.formatters import TerminalFormatter  

from google_play_scraper import Sort, reviews, reviews_all
from google_play_scraper import app as appDetail
# sns.set(style='whitegrid', palette='muted', font_scale=1.2)


from bs4 import BeautifulSoup
from urllib.request import Request, urlopen
import requests
import bs4
import re

import sys
import numpy as np

from flask import request

app = Flask(__name__)
  
import test, app_scraper
  

@app.route('/data')
def data():
    obj = test.data2()
    return obj


@app.route('/get_trending_info')
def get_trending_info():
    trending_info = app_scraper.get_trending()
    return trending_info


@app.route('/get_app_info')
def get_app_info():
    app_name = request.args.get('query')
    # app_name = "Hiking Project"
    app_link = app_scraper.get_link(app_name)
    app_info = app_scraper.get_info(app_link)
    return app_info


@app.route('/get_app_reviews')
def get_app_reviews():
    # app_name = request.args.get('query')
    app_name = "Hiking Project"
    app_link = app_scraper.get_link(app_name)
    app_reviews = app_scraper.get_reviews(app_link)
    return app_reviews


@app.route('/get_phrases')
def get_phrases():
    app_phrases = app_scraper.get_phrases()
    return app_phrases


@app.route('/compare_app')
def compare_app():
    app_name = request.args.get('query')
    # app_name = "Hiking Project"
    app_link = app_scraper.get_link(app_name)
    app_reviews = app_scraper.get_info(app_link)
    return app_reviews

# Running app
if __name__ == '__main__':
    app.run(debug=True)