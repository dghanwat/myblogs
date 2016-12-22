/*global define, console */

define(['angular'], function (angular) {
    'use strict';

    var BlogDetailsCtrl = function ($scope, $state, BlogService, $stateParams) {

        $scope.blogIndex = [];
        $scope.fileName = $stateParams.fileName;

        $scope.retrieveBlogDetails = function () {
            var response = BlogService.getBlogDetails($scope.fileName);
            response.success(function (data) {
                $scope.blogIndex.push(data);
                $scope.$parent.seo = {
                    pageTitle : data.title,
                    pageDescripton: data.shortText
                };

            });

        }

        $scope.retrieveBlogDetails();

    };

    BlogDetailsCtrl.$inject = ['$scope', '$state', 'BlogService', '$stateParams'];
    return BlogDetailsCtrl;

});
