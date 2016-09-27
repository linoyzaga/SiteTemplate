var locationsRoutes = require('./Locations/routes');

module.exports = function routes(app) {
    app.use('/locations', locationsRoutes);
};
