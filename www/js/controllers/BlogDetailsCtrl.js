/*global define, console */

define(['angular'], function (angular) {
    'use strict';


    var BlogDetailsCtrl = function ($scope, $state, BlogService, $stateParams) {
        $scope.baseURL = "https://www.outofmymemory.mysoupy.com/";
        $scope.blogIndex = [];
        $scope.fileName = $stateParams.fileName;
        $scope.socialShareModel = {
            Url: $scope.baseURL + window.location.pathname
        }


        $scope.retrieveBlogDetails = function () {
            var response = BlogService.getBlogDetails($scope.fileName);
            response.success(function (data) {
                $scope.blogIndex.push(data);
                $scope.$parent.seo = {
                    pageTitle : data.title,
                    pageDescripton: data.shortText,
                    shareUrl: $scope.baseURL + window.location.pathname
                };
                $scope.socialShareModel = {
                    Url: $scope.baseURL + window.location.pathname,
                    Name: data.shortText,
                    ImageUrl: $scope.baseURL + "img/logo/logo-2.png"
                };

            });

        }

        $scope.retrieveBlogDetails();

    };

    BlogDetailsCtrl.$inject = ['$scope', '$state', 'BlogService', '$stateParams'];
    return BlogDetailsCtrl;

});
