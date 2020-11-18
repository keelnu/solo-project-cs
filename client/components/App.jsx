// import React, { Component } from 'react';
import React, { useState, useEffect } from 'react';
// import "./App.css";

// class App extends Component {
//   constructor(props) {
//     super(props);
//     // this.state = something;
//   }

//   some functionality here
//   componentDidMount() {
//     fetch('https://api.covidtracking.com')
//       .then(res => res.json())
//       .then(res => this.addCharacters(res.characters))
//       .catch(err => console.log('App.componentDidMount: get characters: ERROR: ', err));
//   }

//   render() {
//     return (
//       // something here
//       <div>
//         console.log('This is my react app');
//       </div>
//     );
//   }
// }
let state = 'fl';
const covidUrl = `https://api.covidtracking.com/v1/states/${state}/current.json`;

function App() {
  //  setCovidData is equivalent to writing this.setState() to update the component state with the value of covidData.
  const [covidData, setCovidData] = useState({}); 

  useEffect(() => {
    // getCovidData();
    fetch(covidUrl)
      .then((response) => {
        // console.log('response', response.text()); // logging reponse (readable streams need response.body)
        return response.json();
      })
      .then((data) => {
        console.log('data is this: ', data); // will show what comes back
        setCovidData(data); 
        })
      .catch((err) => {
        console.log('this is the error ', err);
        throw Error(err.message);
      });
  }, []); // empty array assures it will only run once

  // const getCovidData = async () => {};

  // componentDidMount() {
  //   fetch(covidUrl)
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       console.log('data is this: ', data); // will show what comes back
  //       })
  //     .catch((err) => {
  //       console.log('this is the error ', err);
  //       throw Error(err.message);
  //     });
  // }

  return (
    <div className="App">
      <header className="App-header">
        <h2>Covid-19 Tracking Data</h2>
      </header>
      <div className="data-container">
        <h5 className="info-item">{covidData.name}</h5>
      </div>
    </div>
  );
}


export default App;