var app = angular.module("myApp", ["ngRoute"]);

app.controller('navController', function($scope, $location) {
  $scope.isActive = function(viewLocation) {
    return viewLocation === $location.path();
  };
});


app.config(function($routeProvider) {
    $routeProvider
      .when('/home', {
        templateUrl: '../Views/home.html',
        controller: 'homeController'
      })
      .when('/about', {
        templateUrl: '../Views/about.html',
        controller: 'aboutController'
      })
      .when('/contact', {
        templateUrl: '../Views/Contact.html',
        controller: 'contactController'
      })
      .when('/services', {
        templateUrl: './Views/services.html',
        controller: 'ServicesController'
      })
      .otherwise({ redirectTo: '/home' });
  });