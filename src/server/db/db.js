var mongojs = require("mongojs");
var db = mongojs('mongodb://admin:123456@ds139725.mlab.com:39725/tripydb', ['Locations']);

var Main = mongojs.model('Locations', {
    task: String,
    isCompleted: Boolean,
    isEditing: Boolean
});

module.exports.Main = Main;