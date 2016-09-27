var mongoose = require('mongoose');
mongoose.connect('mongodb://admin:123456@ds139725.mlab.com:39725/tripydb');

var Locations = mongoose.model('Locations', {
    id: String,
    name: String,
    image: String
});

module.exports.Locations = Locations;