TripApp.controller('mainCtrl', ['$scope', 'getLocations', function ($scope, getLocations) {

    // Scrolling the page up
    window.scrollTo(0, 0);

    // Init the variables
    this.allLocations = {};

    // Getting all the locations from the server
    getLocations.getAllLocations().success(function(data){
        debugger;

        // Save all the locations
        this.allLocations = data;

    }).error(function(data){
        console.log(data);
    });
}]);