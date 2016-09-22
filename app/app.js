var app = angular.module('todo', [])
//
app.controller('TodoController',['$scope',function($scope){
  $scope.list = [];
  $scope.list = ['test','execute','refactor'];
  $scope.add = function(item){
    $scope.list.push(item);
  };
}])
