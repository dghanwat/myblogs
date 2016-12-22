/*global define, console */

define(function () {
    'use strict';

    var MenuCtrl = function ($scope, $state, $rootScope, $location) {


        $scope.menuItems = [{
            route: "/home",
            iconClass: "fa-home",
            displayText: "Home"
        }
            , {
                route: "/mysession",
                iconClass: " fa-flag",
                displayText: "My Sessions"
            }, {
                route: "/itinerary",
                iconClass: "fa-calendar",
                displayText: "Itinerary"
            }, {
                route: "/sessions",
                iconClass: "fa-bullhorn",
                displayText: "Sessions"
            }, {
                route: "/speakers",
                iconClass: "fa-microphone",
                displayText: "Speakers"
            }, {
                route: "/survey",
                iconClass: "fa-comments-o",
                displayText: "Survey"
            }, {
                route: "/challenge",
                iconClass: "fa-trophy",
                displayText: "TF Challenge"
            },
            //    {
            //    route: "/askQuestion",
            //    iconClass: "fa-question",
            //    displayText: "Ask A Question"
            //},
            {
                route: "/infoBooth",
                iconClass: "icon-info",
                displayText: "Infobooth"
            }, {
                route: "/login",
                iconClass: "fa fa-sign-out",
                displayText: "Logout"
            }];

        $scope.go = function (path) {
            $rootScope.navBar = true;
            $location.path(path);

        }



    }

    MenuCtrl.$inject = ['$scope', '$state', '$rootScope', '$location'];
    return MenuCtrl;

});
