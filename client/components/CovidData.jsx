import React, { useState, useEffect } from 'react';
// import "../css/App.css";

/* want to pull: positive (total cases), positiveIncrease (new daily cases),
death (total probable deaths), hospitalizedCurrently, inIcuCurrently
*/
// define a variable to hold user state choice and populate it dynamically into fetch url
// let chosenState = '';

// object destructuring to pass in the props object property specific to what we want is HANDY!
const CovidData = ({chosenState}) => {
  const covidUrl = `https://api.covidtracking.com/v1/states/${chosenState}/current.json`;

  // setCovidData updates the component's state with the value of covidData.
  const [covidData, setCovidData] = useState({}); 

  // equivalent to componentDidMount
  // we are fetching the most current Covid data here
  useEffect(() => {
    fetch(covidUrl)
      .then((resp) => resp.json())
      .then((data) => {
        console.log('Covid-19 Tracker Data: ', data); // will show what comes back
        setCovidData(data); // setting state with data we just fetched and parsed
      })
      .catch((err) => {
        // console.log('this is the error ', err);
        throw Error(err.message);
      });
  }, []); // empty array assures it will only run once

  // equivalent to componentDidUpdate
  // when user selects a different state, we make a new fetch call
  useEffect(() => {
    fetch(covidUrl)
      .then((resp) => resp.json())
      .then((data) => {
        console.log('New chosen state data: ', data); // will show what comes back
        setCovidData(data); // setting state with data we just fetched and parsed
      })
      .catch((err) => {
        // console.log('this is the error ', err);
        throw Error(err.message);
      });
  }, [chosenState]);

  return (
    <div>
      <h1 id="state-stat-header">{chosenState} Covid-19 Stats</h1>
      {
        !!Object.keys(covidData).length && // !! if has some truthiness to it, do blah...
        <div className="stats-box">
          <h2>Total Cases: {covidData.positive}</h2>
          <h2>New Daily Cases: {covidData.positiveIncrease}</h2>
          <h2>Total Deaths: {covidData.death}</h2>
          <h2>New Daily Deaths: {covidData.deathIncrease}</h2>
          <h2>Current Hospitalizations: {covidData.hospitalizedCurrently}</h2>
        </div>
      } 
    </div>
  )
};

export default CovidData;
