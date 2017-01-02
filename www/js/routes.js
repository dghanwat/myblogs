/*global define, require */

define(['app'], function (app) {
    'use strict';

    app.config(['$stateProvider', '$urlRouterProvider','$locationProvider',
        function ($stateProvider, $urlRouterProvider,$locationProvider) {

            $stateProvider
                .state('home', {
                    url: "/home",
                    templateUrl: "templates/home.html",
                    controller: 'HomeCtrl'
                })
                .state('advertise', {
                    url: "/advertise",
                    templateUrl: "templates/adv11.html",
                    controller: 'HomeCtrl'
                })
                .state('privacypolicy', {
                    url: "/privacypolicy",
                    templateUrl: "templates/privacypolicy.html",
                    controller: 'HomeCtrl'
                })
                .state('aboutme', {
                    url: "/aboutme",
                    templateUrl: "templates/aboutme.html",
                    controller: 'HomeCtrl'
                })
                .state('blogdetails', {
                    url: "/blog/:fileName",
                    templateUrl: "templates/blogDetails.html",
                    controller: 'BlogDetailsCtrl'
                })

            //$locationProvider.html5Mode(true);
            $locationProvider.html5Mode({
                enabled: true,
                requireBase: false
            });


            $urlRouterProvider.otherwise("/home");

        }]);


});
