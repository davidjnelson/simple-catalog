angular.module('products')
    .directive('productDetail', function(ProductService) {
        return {
            restrict: 'E',
            templateUrl: 'products/directives/ProductDetailDirective.html',
            scope: {
                productId: '='
            },
            link: function(scope) {
                scope.comment = {};
                scope.product = ProductService.getById(scope.productId);

                // add comments if they don't exist so we can do an optimistic write of the comment
                if(!angular.isDefined( ProductService.getById(scope.productId).comments)) {
                    ProductService.getById(scope.productId).comments = [];
                }

                scope.addComment = function(commentText) {
                    // add the comment immediately to the ui
                    ProductService.getById(scope.productId).comments.push(commentText);

                    ProductService.addComment(scope.productId, scope.comment).error(function() {
                        // if the save fails, remove it from the ui
                        ProductService.getById(scope.productId).comments.pop();
                    });
                }
            }
        }
    });
