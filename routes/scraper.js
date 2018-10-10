const express = require('express');
const router = express.Router();
const osmosis = require('osmosis');

// Home Route
router.get('/scraper', function (req, res) {

    // Declare the website we want to scrape
    const website = 'https://dzone.com/';
    // Osmosis request
    const dzone = osmosis.get(website);
    // Set the starting point of Osmosis (high level class name)
    const articleLocation = '.titles';
    // #1 Find all the starting points
    // #2 For every starting point, find the lower level classes
    // #3 Get the data from those classes
    dzone
    .find(articleLocation)
    .set({'title': '.article-title'})
    .data(function(dataObject) {
        // Check if dataObject is empty
        if (Object.keys(dataObject).length !== 0) {
            // Print data to the console
            console.log(dataObject.title);
        }
    });

    

});

module.exports = router;