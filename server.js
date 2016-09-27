// server.js

// modules ============================================================================================================
var express = require('express');
var app = express();
var bodyparser = require("body-parser");
var routes = require('./src/server/routes');
var path = require('path');

// configuration ======================================================================================================
var PORT = process.env.PORT || 3000;
app.use(bodyparser.json());

// Function ===========================================================================================================

// Used for production build
app.use(express.static(path.join(__dirname, 'public')));

routes(app);

app.all('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

// Loading ============================================================================================================
app.listen(PORT, function() {
    console.log('Server running on ' + PORT);
});