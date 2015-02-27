angular.module('catalog')
    .controller('ProductController', function($scope, $routeParams) {
        $scope.routeParams = {};
        $scope.routeParams.id = parseInt($routeParams.id, 10);
    });
