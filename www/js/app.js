/*global define, require */

define(['angular',
        'uiRouter',
        'config',
        'filters/filters',
        'services/services',
        'directives/directives',
        'controllers/controllers',
        'ionicAngular',
        'angularNotify',
        'angularBase64',
        'ngCordova',
        'angulartics'
    ],

    function (angular, uiRouter) {
        'use strict';

        var app = angular.module('app', [
            'ionic',
            'app.controllers',
            'app.filters',
            'app.services',
            'app.directives',
            'app.config',
            'ui.router',
            'cgNotify',
            'base64',
            'ngCordova',
            'angulartics'
        ]);

        return app;

    });
