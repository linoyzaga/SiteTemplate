TripApp.controller('mainCtrl', ['$scope', 'getSites', function ($scope, getSites) {

    // Scrolling the page up
    window.scrollTo(0, 0);

    // Init the variables
    $scope.sites = {};

    // Getting all the locations from the server
    getSites.getAllSites().success(function(data){

        // Save all the locations
        $scope.sites = data;

    }).error(function(data){
        console.log(data);
    });
}]);