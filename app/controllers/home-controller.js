myApp.controller('homeCtrl', function($scope, ProductData) {
  $scope.allProds = [];
  $scope.cartItems = [];
  ProductData.getAllProducts().then(function(res) {
    $scope.allProds = res.data;
  });

  $scope.addItemToCart = function(item) {
    console.log(item);
    $scope.cartItems.push(item);
  }

  $scope.removeCartItem = function(item) {
    var index = $scope.cartItems.indexOf(item);
    $scope.cartItems.splice(index, 1);
  }
});
