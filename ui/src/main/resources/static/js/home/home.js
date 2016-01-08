angular.module('hello', []).controller('home',

function($scope, $http) {

    $http.get('/user/').success(function(data) {
        $scope.user = data.name
    });
});