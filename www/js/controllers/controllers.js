/*global define, require */

define(function (require) {

  'use strict';

  var angular = require('angular'),
    services = require('services/services'),
    config = require('config'),
    controllers = angular.module('app.controllers', ['app.services', 'app.config']);

  controllers.controller('HomeCtrl', require('controllers/HomeCtrl'));
  controllers.controller('BlogDetailsCtrl', require('controllers/BlogDetailsCtrl'));

  controllers.run(['$rootScope', function ($rootScope) {
    $rootScope.sampleParam = "value";
    $rootScope.pageTitle = 'Welcome';
  }]);

  return controllers;

});
