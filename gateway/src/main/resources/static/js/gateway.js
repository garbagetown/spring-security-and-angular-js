angular.module('gateway', []).controller('navigation',
function($scope, $http) {
  var authenticate = function(credentials, callback) {
    var headers = credentials ? {
      authorization: "Basic " + btoa(credentials.username + ":" + credentials.password)
    } : {};
    $http.get('user', {
      headers: headers
    }).success(function(data) {
      if (data.name) {
        $scope.authenticated = true;
      } else {
        $scope.authenticated = false;
      }
      callback && callback();
    }).error(function() {
      $scope.authenticated = false;
      callback && callback();
    });
  }
  
  authenticate();
  
  $scope.credentials = {};
  
  $scope.login = function() {
    authenticate($scope.credentials, function() {
      if ($scope.authenticated) {
        console.log("Login succeeded")
        $scope.error = false;
        $scope.authenticated = true;
      } else {
        console.log("Login failed")
        $scope.error = true;
        $scope.authenticated = false;
      }
    })
  };
});