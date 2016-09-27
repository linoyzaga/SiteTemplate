var siteRoutes = require('./main/routes');

module.exports = function routes(app) {
    app.use('/main', siteRoutes);
};
