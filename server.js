// server.js

// modules ============================================================================================================
var express = require('express');
var app = express();
var bodyparser = require("body-parser");
var routes = require('./src/server/routes');

// configuration ======================================================================================================
var PORT = process.env.PORT || 3000;
app.use(bodyparser.json());

// Function ===========================================================================================================

// Used for production build
app.use(express.static(__dirname + "/public"));

routes(app);

app.all('/*', function(req, res) {
    res.sendFile(__dirname, 'public/index.html');
});

// Loading ============================================================================================================
app.listen(PORT, function() {
    console.log('Server running on ' + PORT);
});