var mongoose = require('mongoose');
var Locations = require('../db/db').Locations;
var express = require('express');
var router = express.Router();

// Get all locations
router.get('/', function(req, res) {
    Locations.find(function (err, docs) {

        // Check the connection completed
        if (err) {
            console.log('Unable to connect to the mongoDB server. Error:', err);
        }

        console.log(docs);

        // Return value
        res.sendFile(docs);
    });
});

module.exports = router;