angular.module('model')
    .factory('ProductService', function($http, REST_ENDPOINT_BASE) {
        var cached = false,
            catalogCache = null,
            catalogLookupCache = null;

        return {
            create: function(product) {
                return $http.post(REST_ENDPOINT_BASE + '/products', product);
            },
            get: function() {
                if(!cached) {
                    return $http.get(REST_ENDPOINT_BASE + '/products').success(function(response) {
                        // use a hashtable for constant lookup
                        catalogLookupCache = {};
                        catalogCache = [];

                        response.products.forEach(function(product) {
                            // convert the grouped comments into an array
                            if(product.comments === null) {
                                product.comments = [];
                            } else {
                                product.comments = product.comments.split('|||');
                            }

                            catalogLookupCache[product.id] = product;
                            catalogCache.push(product);
                        });

                        cached = true;
                    });
                } else {
                    return catalogCache;
                }
            },
            getById: function(productId) {
                return catalogLookupCache[productId];
            },
            isCached: function() {
                return cached;
            },
            addComment: function(productId, comment) {
                return $http.post(REST_ENDPOINT_BASE + '/products/' + productId.toString() + '/comments', comment);
            }
        };
    });
