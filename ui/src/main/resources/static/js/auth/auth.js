angular.module('auth', []).factory('auth',

function($rootScope, $http, $location) {

    var auth = {

        authenticated : false,
        loginPath : '/login',
        logoutPath : '/logout',
        homePath : '/',

        authenticate : function(credentials, callback) {
            var headers = credentials && credentials.username ? {
                authorization : "Basic " + btoa(credentials.username + ":" + credentials.password)
            } : {};

            $http.get('user', {
                headers : headers

            }).success(function(data) {
                if (data.name) {
                    auth.authenticated = true;
                } else {
                    auth.authenticated = false;
                }
                callback && callback(auth.authenticated);
                $location.path(auth.path == auth.loginPath ? auth.homePath : auth.path);

            }).error(function() {
                auth.authenticated = false;
                callback && callback(false);
            });
        },

        clear : function() {
            auth.authenticated = false;
            $location.path(auth.loginPath);
            $http.post(auth.logoutPath, {});
        },

        init : function(homePath, loginPath, logoutPath) {
            auth.homePath = homePath;
            auth.loginPath = loginPath;
            auth.logoutPath = logoutPath;
        }
    };

    return auth;
});