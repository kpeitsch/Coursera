(function () {
'use strict';

angular.module('MenuApp')
.controller('CategoriesController', CategoriesController);


CategoriesController.$inject = ['items'];
function CategoriesController (items) {
  var menu = this;
  console.log("CategoriesController::got categories = ", items);
  menu.items = items.data;
}

})();
