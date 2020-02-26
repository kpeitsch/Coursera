(function () {
'use strict';

angular.module('MenuApp')
.controller('CategoriesController', CategoriesController);


CategoriesController.$inject = ['categories'];
function CategoriesController(categories) {
  var menu = this;
  console.log("CategoriesController::got categories = ", categories);
  menu.categories = categories.data;
}

})();
