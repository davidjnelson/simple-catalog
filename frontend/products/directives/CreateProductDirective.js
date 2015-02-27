angular.module('products')
    .directive('createProduct', function(ProductService) {
        return {
            restrict: 'E',
            templateUrl: 'products/directives/CreateProductDirective.html',
            link: function(scope) {
                scope.product = {};
                scope.output = {};

                scope.save = function(product) {
                    ProductService.create(product).success(function() {
                        scope.output.message = 'Product Inserted!'
                    });
                };
            }
        };
    });
