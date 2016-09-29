var mongoose = require('mongoose');
var express = require('express');
var Sites = require('./db').Sites;
var router = express.Router();

// Get all locations
router.get('/', function(req, res) {
    Sites.find(function (err, docs) {

        // Check the connection completed
        if (err) {
            console.log('Unable to connect to the mongoDB server. Error:', err);
        }

        // Return value
        res.send(docs);
    });
});

module.exports = router;