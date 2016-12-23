/*global define, console */

define(['angular'], function (angular) {
    'use strict';

    var BlogDetailsCtrl = function ($scope, $state, BlogService, $stateParams) {

        $scope.blogIndex = [];
        $scope.fileName = $stateParams.fileName;
        $scope.socialShareModel = {
            Url: window.location.href
        }


        $scope.retrieveBlogDetails = function () {
            var response = BlogService.getBlogDetails($scope.fileName);
            response.success(function (data) {
                $scope.blogIndex.push(data);
                $scope.$parent.seo = {
                    pageTitle : data.title,
                    pageDescripton: data.shortText,
                    shareUrl: window.location.href
                };
                $scope.socialShareModel = {
                    Url: window.location.href,
                    Name: data.shortText,
                    ImageUrl: 'https://outofmymemory.herokuapp.com/img/logo/logo-2.png'
                };

            });

        }

        $scope.retrieveBlogDetails();

    };

    BlogDetailsCtrl.$inject = ['$scope', '$state', 'BlogService', '$stateParams'];
    return BlogDetailsCtrl;

});
