myApp.directive('itemListComponent', function() {
  return {
    scope: {
      title: '@',
      items: '='
    },
    restrict: 'E',
    controller: function() {
      //this.items = [{name: 'foo', active: true}, {name: 'bar', active: false}];
      console.log('asjdajsd')
    },
    controllerAs: 'ItemLstCtrl',
    transclude: true,
    bindToController: true,
    templateUrl: './views/item-list-component.html'
  }
})
