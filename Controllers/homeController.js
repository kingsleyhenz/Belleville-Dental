angular.module('myApp')
  .controller('homeController', function($scope, $http, $window) {
    $scope.date = new Date().toDateString();
    $scope.time = new Date().toLocaleTimeString();
    $scope.location = '';
    if ($window.navigator.geolocation) {
      $window.navigator.geolocation.getCurrentPosition(function(position) {
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;
        $http.get('https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=' + latitude + '&lon=' + longitude)
          .then(function(response) {
            $scope.location = response.data.display_name;
          })
          .catch(function(error) {
            console.log(error);
          });
      });
    } else {
      $scope.location = "Geolocation is not supported by this browser.";
    }
    setInterval(function() {
      $scope.date = new Date().toDateString();
      $scope.time = new Date().toLocaleTimeString();
      $scope.tickerText = $scope.date + ' ' + $scope.time + ' | Location: ' + $scope.location;
      $scope.$apply();
    }, 1000);
  });
