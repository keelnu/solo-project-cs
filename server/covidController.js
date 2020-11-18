const path = require('path');
const fetch = require('node-fetch');

const covidController = {};

covidController.getData = (req, res, next) => {
  // get request for Covid-19 API data
  const { results } =
    fetch('https://api.covidtracking.com')
      .then(res => res.json())
      .then(json => {
        console.log('First object is: ', json[0]);
    });
  if (!results) {
    return next({
      log: 'covidController.getData: ERROR: Error getting Covid-19 Tracker data from API',
      message: { err: 'Error occurred in covidController.getData. Check server logs for more details.' },
    });
  }
  res.locals.covidData = results;
  next();
};

module.exports = covidController;