// Require Dependencies
const express = require('express');
const bodyParser = require('body-parser');

// Init App
const app = express();

// BodyParser Middleware
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

// Require routes
const scraper = require('./routes/scraper');
// Use routes
app.use('/', scraper);

// Listen to port 3000 for connection
const port = 5000

app.listen(port , function() {
    console.log('Server running on port ${port}');
});
