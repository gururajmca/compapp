myApp.factory('ProductData', function($http) {
  var cartList = [];
  return {
    getAllProducts: function() {
      return $http.get('./app/data/products.json');
    },
    getProductPrice: function() {

    },
    addToCart: function(item) {
      cartList.push(item);
    },
    getAllCartList: function() {
      return cartList;
    }
  }
});
