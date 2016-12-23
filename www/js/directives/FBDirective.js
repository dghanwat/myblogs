/*global define*/

define(['angular','jquery'], function (angular,$) {
    "use strict";

    var directive = function ($window,$rootScope) {

        var directive = {
            link: link,
            restrict: 'EA',
            scope: {
                fbLike: '=?'
            }
        };

        function link(scope, element, attrs) {
            if (true) { //!$window.FB
                // Load Facebook SDK if not already loaded
                $.getScript('//connect.facebook.net/en_US/sdk.js', function () {
                    $window.FB.init({
                        appId: $rootScope.facebookAppId,
                        xfbml: true,
                        version: 'v2.0'
                    });
                    renderLikeButton(scope,attrs,element);
                });
            } else {
                renderLikeButton(scope,attrs,element);
            }
        }

        var watchAdded = false;
        function renderLikeButton(scope,attrs,element) {
            if (!!attrs.fbLike && !scope.fbLike && !watchAdded) {
                // wait for data if it hasn't loaded yet
                watchAdded = true;
                var unbindWatch = scope.$watch('fbLike', function (newValue, oldValue) {
                    if (newValue) {
                        renderLikeButton();

                        // only need to run once
                        unbindWatch();
                    }

                });
                return;
            } else {
                element.html('<div class="fb-like"' + (!!scope.fbLike ? ' data-href="' + scope.fbLike + '"' : '') + ' data-layout="button_count" data-action="like" data-show-faces="true" data-share="true"></div>');
                var elementHtml = '<div class="fb-like"' + (!!scope.fbLike ? ' data-href="' + scope.fbLike + '"' : '') + ' data-layout="button_count" data-action="like" data-show-faces="true" data-share="true">'+
                        '<span title="Facebook"' +
                        ' class="pl-social-counter pl-social-twitter pl-animation pla-from-top subtle icon pla-group animation-loaded" '+
                        ' data-social="facebook">'+
                        '<span class="pl-social-icon">'+
                        '<i class="icon icon-facebook"></i>'+
                        '</span></div>';
                //element.html(elementHtml);
                $window.FB.XFBML.parse(element.parent()[0]);
            }
        }

        return directive;

    };

    directive.$inject = ['$window','$rootScope']
    return directive;
});
