describe('Given I am posting a new comment',function(){
  describe('When I push the submit button',function(){
    beforeEach(function(){
      //Assemble
      browser.get('/app/');
      var commentInput = $('input');
      commentInput.sendKeys('a comment');
      //Act
      var submitButton = element.all(by.buttonText('Submit'))
      submitButton.click();
    });
    //Assert
    it('Should then add the comment',function(){
      var comment = element.all(by.repeater('comment in comments')).first();
      expect(comment.getText()).toBe('a comment like 0');
    });
  });
  describe('When I like a comment',function(){
    var firstComment = null;
    beforeEach(function(){
      //Assemble
      firstComment = element.all(by.repeater('comment in comments')).first();
      var likeButton = firstComment.element(by.buttonText('like'));
      //Act
      likeButton.click();
    });
    //Assert
    it('Should increase the number of likes to one',function(){
      var commentLikes = firstComment.element(by.binding('likes'));
      expect(commentLikes.getText()).toBe('1');
    });
  });
});
