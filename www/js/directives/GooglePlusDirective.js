/*global define*/

define(['angular','jquery'], function (angular,$) {
    "use strict";

    var directive = function ($window,$rootScope) {

        var directive = {
            link: link,
            restrict: 'EA',
            scope: {
                googlePlus: '=?'
            }
        };

        function link(scope, element, attrs) {
            if (!$window.gapi) {
                // Load Google SDK if not already loaded
                $.getScript('//apis.google.com/js/platform.js', function () {
                    renderPlusButton();
                });
            } else {
                renderPlusButton();
            }

            var watchAdded = false;
            function renderPlusButton() {
                if (!!attrs.googlePlus && !scope.googlePlus && !watchAdded) {
                    // wait for data if it hasn't loaded yet
                    watchAdded = true;
                    var unbindWatch = scope.$watch('googlePlus', function (newValue, oldValue) {
                        if (newValue) {
                            renderPlusButton();

                            // only need to run once
                            unbindWatch();
                        }

                    });
                    return;
                } else {
                    element.html('<div class="g-plusone"' + (!!scope.googlePlus ? ' data-href="' + scope.googlePlus + '"' : '') + ' data-size="medium"></div>');
                    $window.gapi.plusone.go(element.parent()[0]);
                }
            }
        }



        return directive;

    };

    directive.$inject = ['$window','$rootScope']
    return directive;
});
