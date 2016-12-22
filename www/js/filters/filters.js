/*global define */

define(['angular', 'filters/InterpolateFilter', 'services/services'],
  function (angular, InterpolateFilter) {
    'use strict';

    var filters = angular.module('app.filters', ['app.services']);
    filters.filter('interpolate', InterpolateFilter);
    filters.filter('split', function () {
      return function (input, splitChar, splitIndex) {
        return input.split(splitChar)[splitIndex];
      }
    });
    return filters;

  });
