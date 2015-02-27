angular.module('products')
    .directive('listProducts', function(ProductService) {
        return {
            restrict: 'E',
            templateUrl: 'products/directives/ListProductsDirective.html',
            link: function(scope) {
                scope.products = {};

                if(ProductService.isCached()) {
                    scope.products = ProductService.get();
                } else {
                    ProductService.get().success(function(response) {
                        scope.products = response.products;
                    });
                }
            }
        };
    });
