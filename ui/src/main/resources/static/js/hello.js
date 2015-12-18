angular.module('hello', ['ngRoute'])
  .config(function($routeProvider) {
    $routeProvider.when('/', {
      templateUrl : 'home.html',
      controller : 'home'
    }).otherwise('/');

  })
  .controller('navigation', function($rootScope, $scope, $http, $location) {

    $http.get('user', {headers : headers}).success(function(data) {
      if (data.name) {
        $rootScope.authenticated = true;
      } else {
        $rootScope.authenticated = false;
      }
      callback && callback();
    }).error(function() {
      $rootScope.authenticated = false;
      callback && callback();
    });

    $scope.credentials = {};

    $scope.logout = function() {
      $http.post('logout', {}).success(function(data) {
        $rootScope.authenticated = false;
        $location.path("/");
      }).error(function(data) {
        $rootScope.authenticated = false;
      });
    }
  })
  .controller('home', function($scope, $http) {
    $http.get('resource/').success(function(data) {
      $scope.greeting = data;
    });
  });
