/*global define */

define(['angular'], function (angular) {
	'use strict';

	return angular.module('app.config', [])
		.constant('VERSION', '0.1')
    .constant("API_SERVER","https://odctechforum-fluidmobileapp.rhcloud.com/rest/tech");

});
