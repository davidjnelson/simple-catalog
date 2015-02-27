angular.module('catalog')
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'catalog/route-templates/root.html'
            })
            .when('/product/:id', {
                templateUrl: 'catalog/route-templates/product.html',
                controller: 'ProductController',
                // wait for the catalog to be retrieved before resolving the route, so if the user
                // refreshes the browser while viewing a product they will see the product
                resolve: {
                    // the products property in the controller is not used directly but must exist
                    products: function(ProductService) {
                        return ProductService.get();
                    }
                }
            })
            .when('/create', {
                templateUrl: 'catalog/route-templates/create.html'
            });
    });
