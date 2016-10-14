describe('The product App', function(){
  var fakeProduct1 = {id: 1, name: "fake1"};
  var fakeProduct2 = {id: 2, name: "fake2"};
  describe('The search controller', function() {
    var searchControllerScope = {};
    var rootscope = {};
    beforeEach(function(){
      module('product');
      inject(function($controller, $rootScope){
        searchControllerScope = $rootScope.$new();
        $controller('SearchController', {$scope:searchControllerScope});
        rootscope = $rootScope;
        spyOn(rootscope, '$broadcast');
      });
    })
    it('should not show any results in the begining', function() {
      expect(searchControllerScope.results).toBeDefined();
      expect(searchControllerScope.results.length).toEqual(0);
    })
    it('should do a search and populate results', function() {
      searchControllerScope.performSearch();
      expect(searchControllerScope.results).toBeDefined();
    })
    it('should correctly broadcast SELECT_PRODUCT', function(){
      searchControllerScope.viewDetails(fakeProduct1);
      expect(rootscope.$broadcast).toHaveBeenCalledWith('SELECT_PRODUCT', fakeProduct1);
    })
    it('should correctly broadcast ADD_TO_CART', function(){
      searchControllerScope.addToCart(fakeProduct2);
      expect(rootscope.$broadcast).toHaveBeenCalledWith('ADD_TO_CART', fakeProduct2);
    })

    afterEach(function(){
      searchControllerScope = {};
      rootscope = {};
    });
  })
  describe('The details controller', function() {
    var detailsControllerScope = {};
    var rootscope = {};
    beforeEach(function(){
      module('product');
      inject(function($controller, $rootScope){
        detailsControllerScope = $rootScope.$new();
        $controller('DetailsController', {$scope:detailsControllerScope});
        rootscope = $rootScope;
      });
    });
    it('should not display any details', function() {
      expect(detailsControllerScope.product).not.toBeDefined();
    })
    it('should display a product on the SELECT_PRODUCT event', function() {
      rootscope.$broadcast('SELECT_PRODUCT',fakeProduct1);
      expect(detailsControllerScope.product).toBeDefined();
      expect(detailsControllerScope.product).toEqual(fakeProduct1);
    })
    it('should display a product on the VIEW_PRODUCT event', function() {
      rootscope.$broadcast('VIEW_PRODUCT',fakeProduct2);
      expect(detailsControllerScope.product).toBeDefined();
      expect(detailsControllerScope.product).toEqual(fakeProduct2);
    })
    afterEach(function(){
      detailsControllerScope = {};
      rootscope = {};
    });
  })
  describe('The recently viewed controller', function() {
    var recentlyViewedControllerScope = {};
    var rootscope = {};
    beforeEach(function(){
      module('product');
      inject(function($controller, $rootScope){
        recentlyViewedControllerScope = $rootScope.$new();
        $controller('RecentlyViewedController', {$scope:recentlyViewedControllerScope});
        rootscope = $rootScope;
      });
    });
    it('should have a products array defined', function() {
      expect(recentlyViewedControllerScope.products).toBeDefined();
      expect(recentlyViewedControllerScope.products.length).toEqual(0);
    })
    it('should add viewed products on the SELECT_PRODUCT event', function() {
      rootscope.$broadcast('SELECT_PRODUCT',fakeProduct1);
      expect(recentlyViewedControllerScope.products.length).toEqual(1);
      expect(recentlyViewedControllerScope.products[0]).toEqual(fakeProduct1);
      rootscope.$broadcast('SELECT_PRODUCT',fakeProduct2);
      expect(recentlyViewedControllerScope.products.length).toEqual(2);
      expect(recentlyViewedControllerScope.products[1]).toEqual(fakeProduct2);
    })
    it('should correctly broadcast VIEW_PRODUCT', function() {
      spyOn(rootscope, '$broadcast');
      recentlyViewedControllerScope.viewDetails(fakeProduct1);
      expect(rootscope.$broadcast).toHaveBeenCalledWith('VIEW_PRODUCT', fakeProduct1);
    })
    afterEach(function(){
      recentlyViewedControllerScope = {};
      rootscope = {};
    });
  })
  describe('The cart controller', function() {
    var cartControllerScope = {};
    var rootscope = {};
    beforeEach(function(){
      module('product');
      inject(function($controller, $rootScope){
        cartControllerScope = $rootScope.$new();
        $controller('CartController', {$scope: cartControllerScope});
        rootscope = $rootScope;
      });
    });
    it('should have a products array defined', function() {
      expect(cartControllerScope.products).toBeDefined();
      expect(cartControllerScope.products.length).toEqual(0);
    })
    it('should add viewed products on the ADD_TO_CART event', function() {
      rootscope.$broadcast('ADD_TO_CART',fakeProduct1);
      expect(cartControllerScope.products.length).toEqual(1);
      expect(cartControllerScope.products[0]).toEqual(fakeProduct1);
      rootscope.$broadcast('ADD_TO_CART',fakeProduct2);
      expect(cartControllerScope.products.length).toEqual(2);
      expect(cartControllerScope.products[1]).toEqual(fakeProduct2);
    })
    it('should correctly remove products', function() {
      rootscope.$broadcast('ADD_TO_CART',fakeProduct1);
      rootscope.$broadcast('ADD_TO_CART',fakeProduct2);
      expect(cartControllerScope.products.length).toEqual(2);
      cartControllerScope.remove(fakeProduct1);
      expect(cartControllerScope.products.length).toEqual(1);
      expect(cartControllerScope.products[0]).toEqual(fakeProduct2);
    })
    afterEach(function(){
      cartControllerScope = {};
      rootscope = {};
    });
  })
})
