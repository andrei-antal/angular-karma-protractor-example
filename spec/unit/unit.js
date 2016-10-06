describe('CommentController', function(){
  var scope = {};
  beforeEach(function(){
    module('comments');
    inject(function($controller){
      $controller('CommentController',{$scope:scope});
    });
    scope.add('any comment');
  });
  it('should add the comment', function(){
    var firstComment = scope.comments[0];
    expect(firstComment.value).toBe('any comment');
  });
});
