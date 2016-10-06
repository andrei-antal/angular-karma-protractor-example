describe('Given I am searching', function(){
  describe('when I type in a search query',function(){
    //Store the searchResult for use in the test
    var searchResult = null;
    beforeEach(function(){
      //ASSEMBLE
      browser.get('/app/');
      searchResult = element.all(by.repeater('result in results'));
      expect(searchResult.count()).toBe(0);
      //ACT
      var searchQueryInput = $('input');
      searchQueryInput.sendKeys('any value');
      var searchButton = element(by.buttonText('search'));
      searchButton.click();
    });
    //Assert
    it('should display some results', function(){
        expect(searchResult.count()).toBe(1);
    });
    describe('Given search results',function(){
      describe('When I select an item from the search results', function(){
        var resultId = null;
        beforeEach(function(){
          var resultItem = element.all(by.repeater('result in results')).first();
          var resultLink = resultItem.element(by.css('a'));
          resultLink.click();
          resultId = resultLink.getAttribute('href').then(function(attr) {
            return attr.match(/#\/detail\/(\d+)/)[1];
          });
        });
        it('Should see the details in the main page component',function(){
          var resultDetail = element(by.css('#searchResultDetail'));
          expect(resultDetail.isDisplayed()).toBeTruthy();
        });

        it('Should set the url to the selected detail view',function(){
          resultId.then(function(id) {
            var expectedUrl = '/detail/'+id;
            browser.getLocationAbsUrl().then(function(url) {
              expect(url).toBe(expectedUrl);
            });
          })
        });
      });
    });
  });
});
