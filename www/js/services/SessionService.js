/*global define, console */

define(['angular'], function (angular) {
    "use strict";

    var SessionService = function (API_SERVER, $http) {
        return {
            getMySessions: function (userId) {
                return $http.get(API_SERVER+"/session/user/"+userId)
                //return $http.get("js/data/mysessions.json");
            },

            all: function () {
                return $http.get("js/data/allsessions.json");
            }
            ,
            getPresenters: function () {
                //$http.get(API_SERVER+"/session/user/"+$scope.userId).success(function(data){
                return $http.get("js/data/allpresenters.json");
            },

            registerUserToSession: function(sessionId, userId) {
                console.log(userId);
                return $http.post(API_SERVER+"/session/add/user/"+sessionId+"/"+userId+"/aa/aa/register")
            },
            unRegisterUserToSession: function(sessionId, userId) {
                return $http.post(API_SERVER+"/session/add/user/"+sessionId+"/"+userId+"/a/a/unregister")
            }

        };

    };

    SessionService.$inject = ['API_SERVER', '$http'];
    return SessionService;
});