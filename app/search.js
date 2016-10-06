var searchModule = angular.module('search',['ngRoute']);

searchModule.config(['$routeProvider',function($routeProvider){
  $routeProvider
    .when('/splash',{
      templateUrl : 'splash.html',
      controller : 'SplashController'
    })
    .when('/detail/:id',{
      templateUrl : 'searchDetail.html',
      controller : 'SearchDetailController'
    })
    .otherwise({
      redirectTo : '/splash'
    });
}]);
