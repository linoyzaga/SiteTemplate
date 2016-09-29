TripApp.factory('getSites', ['$http', function($http) {

    var fac = {};

    // Getting the locations from the DB
    fac.getAllSites = function () {

        return $http.get('/Sites');
    }

    // Return value
    return fac;
}]);