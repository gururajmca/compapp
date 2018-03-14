var myApp = angular.module('myAppModule', []);

myApp.component('myCompApp', {
  templateUrl: "./views/home.html",
  controller: myCompCtrl,
  bindings: {
    items: '<'
  }
});

function myCompCtrl(ProductData) {
  this.view = 'table';
  //this.allProds = [1,2,3];
  //this.items = [{name: 'foo', active: true}, {name: 'bar', active: false}];
  // ProductData.getAllProducts().then(function(res) {
  //   console.log(res);
  //   this.allProds = res.data;
  // });
}
