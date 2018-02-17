myApp.component('shopingCart', {
  templateUrl: './views/shoping-cart.html',
  controller: myShopingCart
});

function myShopingCart($scope, ProductData) {
  $scope.title = "Shoping Cart";

  $scope.shopingCart = ProductData.getAllCartList();
}
