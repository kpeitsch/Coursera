(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemsController', ItemsController);


ItemsController.$inject = ['categoryItems'];
function ItemsController (categoryItems) {
  var menu = this;
  menu.items = categoryItems.data;
}

})();
