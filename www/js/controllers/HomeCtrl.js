/*global define, console */

define(['angular'], function (angular) {
    'use strict';

    var HomeCtrl = function ($scope, $state,BlogService) {

      $scope.blogIndex = [];

      $scope.retrieveBlogIndex = function() {
        var response = BlogService.getBlogIndex();
        response.success(function(data){
          angular.forEach(data, function (content) {
            $scope.blogIndex.push(content);
          })
        });

      }

      $scope.retrieveBlogIndex();

    };

    HomeCtrl.$inject = ['$scope', '$state','BlogService'];
    return HomeCtrl;

});
