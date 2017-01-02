/*global define*/

define(['angular'], function (angular) {
    "use strict";

    var directive = function (BlogService) {

        var directive = {
            link: link,
            restrict: 'EA',
            scope: true,
            template: '<h2 class="widgettitle">Recent Posts</h2><ul><li ng-repeat="x in recentBlogs"><a href="/blog/{{x.fileName}}">{{x.title}}</a></li></ul>',
        };

        return directive;


        function link(scope, element, attrs) {
            var response = BlogService.getBlogIndex();
            scope.recentBlogs = [];
            response.success(function (data) {
                var keepGoing = true;
                var count = 0;
                angular.forEach(data, function (content) {
                    count++;
                    if (count > 5) {
                        keepGoing = false;
                    } else {
                        scope.recentBlogs.push(content);
                    }
                    if (!keepGoing) {
                        return;
                    }

                })
            });
        }

    };

    directive.$inject = ['BlogService'];
    return directive;
});