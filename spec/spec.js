describe('The cart app',function(){
  var searchBtn = null;
  beforeEach(function(){
    browser.get('/app');
    searchBtn = element(by.buttonText('Search'));
  });
  describe('Search', function() {
    it('should initially have no result',function(){
      var searchItems = element.all(by.repeater('result in results'));
      expect(searchItems.count()).toBe(0);
    });
    it('should display some results when clicking on search',function(){
      searchBtn.click();
      var searchItems = element.all(by.repeater('result in results'));
      expect(searchItems.count()).toBeGreaterThan(0);
    });
    it('should display details for a clicked item in the results', function() {
      searchBtn.click();
      var searchItem = element.all(by.repeater('result in results')).first();
      searchItem.element(by.css('span')).click();
      var details = element(by.id('productDetail'));
      expect(details.isPresent()).toBeTruthy();
    })
    it('should add items to recenly viewed', function() {
      searchBtn.click();

    })
  })
});
