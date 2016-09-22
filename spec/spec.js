describe('The to do list',function(){
  //ASSEMBLE
  beforeEach(function(){
  //ACT
  browser.get('/app');
  });
  it('should have 3 items',function(){
    var todoListItems = element.all(by.repeater('item in list'));
    //ASSERT
    expect(todoListItems.count()).toBe(3);
  });
});
