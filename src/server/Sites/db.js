var mongoose = require('mongoose');
mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://admin:123456@ds139725.mlab.com:39725/tripydb');

var sites = mongoose.model('sites', {
    _id: mongoose.Schema.ObjectId,
    name: String,
    image: String,
    rating: String,
    address: String,
    activityHours: String,
    history: String,
    publicTransport: String,
    price: String,
    tips: String,
    locationID: String,
    latitude: String,
    longitude: String
});

module.exports.Sites = sites;