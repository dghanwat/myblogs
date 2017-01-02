/*global define, console */

define(['angular'], function (angular) {
    'use strict';



    var HomeCtrl = function ($scope, $state, BlogService) {
        $scope.baseURL = "https://outofmymemory.herokuapp.com/";

        $scope.blogIndex = [];
        $scope.$parent.seo = {
            pageTitle: "Blogs from My Memory",
            pageDescripton: "We are a respected blog with niche content. The articles provide useful best practices, tutorials, articles, code samples and snippets on latest technologies such as Core Java, AngularJS , Design Patterns, Ionic Framework, Scala etc.",
            shareUrl: $scope.baseURL + window.location.pathname
        };

        $scope.retrieveBlogIndex = function () {
            var response = BlogService.getBlogIndex();
            response.success(function (data) {
                angular.forEach(data, function (content) {
                    $scope.blogIndex.push(content);
                })
            });

        }

        $scope.retrieveBlogIndex();

    };

    HomeCtrl.$inject = ['$scope', '$state', 'BlogService'];
    return HomeCtrl;

});
