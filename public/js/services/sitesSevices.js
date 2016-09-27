TripApp.factory('getLocations', ['$http', function($http) {

    var fac = {};

    // Getting the locations from the DB
    fac.getAllLocations = function () {

        return $http.get('/locations');
    }

    // Return value
    return fac;
}]);