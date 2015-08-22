"use strict";

angular.module('app').config(['$routeProvider', function ($routeProvider) {
   
    var routes = [

        {
            url: '/dashboard',
            config : {template: '<wwa-dashboard></www-dashboard>'
            }
        },

        {
            url: '/locations',
            config: {
                template: '<wwa-locations></www-locations>'
            }
        },

        {
            url: '/guides',
            config: {
                template: '<wwa-guides></www-guides>'
            }
        }
    ];

    routes.forEach(function (route) {
        $routeProvider.when(route.url, route.config);
    });

    $routeProvider.otherwise({ redirectTo: '/dashboard' });
}]);