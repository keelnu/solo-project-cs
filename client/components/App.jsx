import React, { useState } from 'react';
import CovidData from './CovidData.jsx';
// import "../css/App.css";

// let state = 'ny';
// const covidUrl = `https://api.covidtracking.com/v1/states/${state}/current.json`;
// // want to pull: positive (total cases), positiveIncrease (new daily cases), death (total probable deaths), hospitalizedCurrently, inIcuCurrently

// function App() {
//   //  setCovidData is equivalent to writing this.setState() to update the component state with the value of covidData.
//   // const [covidData, setCovidData] = useState({}); 
//   const [covidData, setCovidData] = useState({}); 

//   // equivalent to componentDidMount
//   // we are fetching the most current Covid data here
//   useEffect(() => {
//     fetch(covidUrl)
//       .then((response) => {
//         return response.json();
//       })
//       .then((data) => {
//         console.log('Covid-19 Tracker Data: ', data); // will show what comes back
//         setCovidData(data); // setting state with data we just fetched and parsed
//         })
//       .catch((err) => {
//         console.log('this is the error ', err);
//         throw Error(err.message);
//       });
//   }, []); // empty array assures it will only run once

//   return (
//     <div className="App">
//       <header className="App-header">
//         <h2>Covid-19 Tracking Data</h2>
//       </header>
//       <div className="data-container">
//         <h5 className="info-item">{covidData.positive}</h5>
//       </div>
//     </div>
//   );
// }

const App = () => {

  const [listOfStates] = useState(['CA', 'CO', 'NY', 'MI', 'NJ', 'TX']); // list of states you can choose
  const [chosenState, setChosenState] = useState(listOfStates[0]); // setting NY as default state in dashboard

  const handleStateChange = (newState) => {
    setChosenState(newState);
  };

  return (
      <div className="dropdown">
      <label>Select your state:</label> 
      <select id="state-select" onChange={(e) => handleStateChange(e.target.value)}>
        {
          listOfStates.map(choice => <option key={choice}>{choice}</option>)
        }
      </select>
      <CovidData chosenState={chosenState}/>
    </div>
  )

}


export default App;