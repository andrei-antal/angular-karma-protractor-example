var flipFlop = angular.module('flipFlop',['ngRoute']);

flipFlop.config(['$routeProvider',function($routeProvider){
  $routeProvider
  .when('/view/a',{
    templateUrl : 'viewA.html',
    controller : 'ViewAController'
  })
  .when('/view/b',{
    templateUrl : 'viewB.html',
    controller : 'ViewBController'
  })
  .otherwise({
    redirectTo : '/view/a'
  });
}]);
