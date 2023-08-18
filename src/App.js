import {BrowserRouter as Router, Switch, Route, useHistory } from 'react-router-dom'
import Sentimentpage from './pages/sentimentpage';
import Landingpage from './pages/landingpage';
import Phrasepage from './pages/phrasepage';
import Comparepage from './pages/comparepage';
// import Sidebar from './components/sidebar'
// import Filterbar from './components/filterbar'
// import Searchbar from './components/searchbar';
import Reviewpage from './pages/reviewpage';
import './App.css';
import MyContext from './MyContext';


import React, { useState, useEffect } from "react";

function App() {

  const [input, setInput] = useState("");
  const history = useHistory();

  const [app_info, setapp_info] = useState([{}]);
  const [no_of_review, setno_of_review] = useState(0);
  const [rating, setrating] = useState(0.0);
  const [star_breakdown, setstar_breakdown] = useState([5,5,3,5,5]);
  const [star_breakdown_perc, setstar_breakdown_perc] = useState([0,0,0,0,0]);
  const [sentiment_breakdown, setsentiment_breakdown] = useState([0,0,0]);
  const [sentiment_breakdown_perc, setsentiment_breakdown_perc] = useState([0,0,0,0,0]);
  const [reviews, setreviews] = useState([]);
  
  const handleInputChange = (event) => {
    setInput(event.target.value);
  };


  // useEffect(() => {
  //   // Call API to preprocess input when location changes
  //   if (location.pathname === '/reviewpage') {
  //     fetch(`/get_app_info?query=${input}`)
  //       .then((response) => response.json())
  //       .then((app_info) => {
  //         setapp_info(app_info);
  //         setno_of_review(app_info.reviews);
  //         setrating(app_info.score);
  //         let [perc5, perc4, perc3, perc2, perc1] = app_info.histogram_percentage.map((perc) =>
  //           perc >= 100 ? 100 : perc
  //         );
  //         setstar_breakdown(app_info.histogram);
  //         setstar_breakdown_perc([perc5, perc4, perc3, perc2, perc1]);
  //       });

  //     fetch(`/get_app_reviews?query=${input}`)
  //       .then((response) => response.json())
  //       .then((reviews) => {
  //         setreviews(reviews.slice(2));
  //         let percentage = reviews[0];
  //         let [progressPos, progressMix, progressNeg] = percentage.map((perc) => (perc >= 100 ? 100 : perc));
  //         setsentiment_breakdown(reviews[1]);
  //         setsentiment_breakdown_perc([progressPos, progressMix, progressNeg]);
  //       });
  //   }
  // }, [location.pathname]);

  



  const handleSearch = () => {

      // Call API to preprocess input  //python api to send
      fetch(`/get_app_info?query=${input}`)    //python api to send
        .then((response) => response.json())
        .then((app_info) => {
          
          setapp_info(app_info);
          setno_of_review(app_info.reviews);
          setrating(app_info.score);

          let perc5 = app_info.histogram_percentage[0];
          let perc4 = app_info.histogram_percentage[1];
          let perc3 = app_info.histogram_percentage[2];
          let perc2 = app_info.histogram_percentage[3];
          let perc1 = app_info.histogram_percentage[4];

          let progress5 = perc5 >= 100 ? 100 : perc5;
          let progress4 = perc4 >= 100 ? 100 : perc4;
          let progress3 = perc3 >= 100 ? 100 : perc3;
          let progress2 = perc2 >= 100 ? 100 : perc2;
          let progress1 = perc1 >= 100 ? 100 : perc1;
          
          setstar_breakdown([perc5, perc4, perc3, perc2, perc1])
          setstar_breakdown(app_info.histogram)
          setstar_breakdown_perc([progress5, progress4, progress3, progress2, progress1]);
          console.log("app_info fetched") 
          console.log(no_of_review)

          fetch(`/get_app_reviews?query=${input}`).then(
            res => res.json()
          ).then(
            reviews => {
              setreviews(reviews);
      
              let percentage = reviews[0];
              let progressPos = percentage[0] >= 100 ? 100 : percentage[0];
              let progressMix = percentage[1] >= 100 ? 100 : percentage[1];
              let progressNeg = percentage[2] >= 100 ? 100 : percentage[2];
      
              setsentiment_breakdown_perc([progressPos, progressMix, progressNeg]);
              setsentiment_breakdown(reviews[1]);
              setreviews(reviews.slice(2));
              
              console.log("APi preprocessed")
              console.log("//////")
              
              // history.push('/reviewpage');
            }
          )
      });


    // if (input) {
    //   // Navigate to review page if input is not empty
    //   // Note: This will trigger the useEffect hook to call the APIs and update the state variables
    //   window.location.href = '/reviewpage';
    // }
  };

  let data = [app_info, no_of_review, rating, star_breakdown, star_breakdown_perc, sentiment_breakdown, sentiment_breakdown_perc, reviews];
  console.log(data);

  // let data = no_of_review;
  // console.log("/////")
  // console.log(data)

  return (
    // <MyContext.Provider value={{ app_info, setapp_info, no_of_review, setno_of_review, rating, setrating, star_breakdown, setstar_breakdown, star_breakdown_perc, setstar_breakdown_perc, sentiment_breakdown, setsentiment_breakdown, sentiment_breakdown_perc, setsentiment_breakdown_perc, reviews, setreviews }}>
    <Router>
      <Switch>
        <Route exact path='/'>
          <Landingpage input={input} handleInputChange={handleInputChange} handleSearch={handleSearch}/>
        </Route>
        <Route exact path='/comparepage'>
          <Comparepage />
        </Route>
        <Route exact path='/phrasepage'>
          <Phrasepage />
        </Route>
        <Route path='/sentimentpage'>
          <Sentimentpage />
        </Route>
        <Route path='/landingpage'>
          <Landingpage input={input} handleInputChange={handleInputChange} handleSearch={handleSearch}/>
        </Route>
        <Route path='/reviewpage'>
          {/* <Sidebar/> */}
          {/* Update the output prop................... Updated */}
          {/* <Reviewpage no_of_reviews = {no_of_review} rating = {rating} star_breakdown = {star_breakdown} star_breakdown_perc = {star_breakdown_perc} sentiment_breakdown = {sentiment_breakdown} sentiment_breakdown_perc = {sentiment_breakdown_perc} reviews = {reviews} />    */}
          <Reviewpage data={data}/>
        </Route>
      </Switch>
    </Router>
    // </MyContext.Provider>
  );
}

export default App;
