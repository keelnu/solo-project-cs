const express = require('express');
const app = express();
const path = require('path');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// serve index.html page when /index is visited
  // CODE HERE
app.get('/', (req, res) => res.send('HELLO FROM EXPRESS'));

if (process.env.NODE_ENV === 'production') { // Only run this for production
  // statically serve everything in the build folder on the route '/build'
  app.use('/build', express.static(path.join(__dirname, '../build')));
  // serve index.html on the route '/'
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
  });
}

app.use('*', function(req, res){
  res.status(404)
    .append('Content-Type', 'text/html; charset=UTF-8')
    .sendFile(path.resolve(__dirname, './client/404.html'));
});

app.listen(3000, () => console.log('Listening on port 3000'));
