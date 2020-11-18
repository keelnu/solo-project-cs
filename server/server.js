const express = require('express');
const app = express();
const path = require('path');
// const fetch = require('node-fetch');
// const covidController = require('./covidController');
/**
 * require routers
 */
// const apiRouter = require('./apiRoute.js');

/**
 * handle parsing request body
 */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/**
 * define route handlers
 */
// app.use('/apiRoute', apiRouter);

/**
 * handle requests for static files
 */
// app.use(express.static(path.resolve(__dirname, 'client')));
// route handler to respond with main app
app.get('/', (req, res) => res.sendFile(path.resolve(__dirname, '../index.html')));

// Only run this for production
if (process.env.NODE_ENV === 'production') { 
  // statically serve everything in the build folder on the route '/build'
  app.use('/build', express.static(path.join(__dirname, '../build')));
  // serve index.html on the route '/'
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
  });
}

// catch-all route handler for any requests to an unknown route
// app.use('*', function(req, res){
//   res.status(404)
//     .append('Content-Type', 'text/html; charset=UTF-8')
//     .sendFile(path.resolve(__dirname, './client/404.html'));
// });

app.listen(3000, () => console.log('Listening on port 3000'));

module.exports = app;
