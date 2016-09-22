describe('when using a to-do list', function(){
  var scope = {};
  beforeEach(function(){
    module('todo');
    inject(function($controller){
      $controller('TodoController',{$scope:scope});
      scope.add('repeat');
    });
  });
  it('should define a list object',function(){
    expect(scope.list).to.exist;
  });
  it('should define a list object', function(){
    expect(scope.list[0]).to.equal('test');
  });
  it('should define a list object', function(){
    expect(scope.list[1]).to.equal('execute');
  });
  it('should define a list object', function(){
    expect(scope.list[2]).to.equal('refactor');
  });
  it('should add item to last item in list',function(){
    var lastIndexOfList = scope.list.length - 1;
    expect(scope.list[lastIndexOfList]).to.equal('repeat');
  });
});
