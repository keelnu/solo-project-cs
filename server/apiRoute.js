const express = require('express');
const covidController = require('./covidController');
const router = express.Router();

router.get('/', covidController.getData, (req, res) => {
  res.status(200)
    .json({ data: res.locals.covidData });
});

module.exports = router;