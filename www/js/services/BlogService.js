/*global define, console */

define(['angular'], function (angular) {
    "use strict";

    var BlogService = function (API_SERVER, $http) {
        return {
            getBlogIndex: function (userId) {
                //return $http.get(API_SERVER+"/session/user/"+userId)
                return $http.get("js/data/index.json");
            },

          getBlogDetails:function(fileName) {
            return $http.get("js/data/blogs/"+fileName+".json");
          }

        };

    };

  BlogService.$inject = ['API_SERVER', '$http'];
    return BlogService;
});
