// Creating the app module
var TripApp = angular.module('App', ['ngRoute', 'ngResource']);

// Configure the routes
TripApp.config(function($routeProvider) {
    $routeProvider

        // Route for the home page
        .when('/', {
            templateUrl : 'pages/home.html',
            controller  : 'mainCtrl'
        })

        // Route back to home page
        .otherwise(
            {redirectTo:'/'}
        );
});