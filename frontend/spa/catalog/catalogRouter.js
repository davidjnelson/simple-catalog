angular.module('catalog')
    .config(function($routeProvider) {
        $routeProvider
            .when('/create', {
                templateUrl: 'spa/catalog/controllers/CreateProductController.html',
                controller: 'CreateProductController'
            })
    });