(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemsController', ItemsController);


ItemsController.$inject = ['categoryItems'];
function ItemsController (categoryItems) {
  var itemDetail = this;
  console.log("controller get categoryItems: " + categoryItems.data);
  itemDetail.categoryItems = categoryItems.data;
}

})();
