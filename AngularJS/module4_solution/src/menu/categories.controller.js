(function () {
'use strict';

angular.module('MenuApp')
.controller('CategoriesController', CategoriesController);


CategoriesController.$inject = ['items'];
function CategoriesController (items) {
  var menu = this;
  menu.items = items.data;
}

})();
