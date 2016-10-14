angular.module('product', [])
  .controller('SearchController', function($scope, $rootScope){
    var products = [
      {id: 0, name: "product1"},
      {id: 1, name: "product2"},
      {id: 2, name: "product3"},
      {id: 3, name: "product4"},
      {id: 4, name: "product5"}
    ];

    $scope.results = [];
    
    $scope.performSearch = function() {
      $scope.results = products;
    }
    $scope.viewDetails = function(product) {
      $rootScope.$broadcast('SELECT_PRODUCT', product);
    }

    $scope.addToCart = function(product) {
      $rootScope.$broadcast('ADD_TO_CART', product);
    }
  })
  .controller('DetailsController', function($scope, $rootScope){
    $rootScope.$on('SELECT_PRODUCT', function(event, args){
      $scope.product = args;
    });
    $rootScope.$on('VIEW_PRODUCT', function(event, args){
      $scope.product = args;
    });
  })
  .controller('RecentlyViewedController', function($scope, $rootScope){
    $scope.products = [];
    $rootScope.$on('SELECT_PRODUCT', function(event, args){
      $scope.products.push(args);
    });

    $scope.viewDetails = function(product) {
      $rootScope.$broadcast('VIEW_PRODUCT', product);
    }
  })
  .controller('CartController', function($scope, $rootScope){
    $scope.products = [];
    $rootScope.$on('ADD_TO_CART', function(event, args){
      $scope.products.push(args);
    });
    $scope.remove = function(product) {
      $scope.products = $scope.products.filter(function(prod){
        return product.id != prod.id;
      })
    }
  })
