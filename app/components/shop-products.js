myApp.component('shopProducts', {
  templateUrl: './views/shop-products.html',
  controller: myShopProducts
});

function myShopProducts($scope, ProductData) {
  $scope.title = "Card Title";
  ProductData.getAllProducts().then(function(res) {
    $scope.allProds = res.data;
  });

  $scope.addToCart = function(item) {
    ProductData.addToCart(item);
  }
}
