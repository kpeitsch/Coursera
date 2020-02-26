(function () {
'use strict';

angular.module('Data')
.controller('CategoriesController', CategoriesController);


CategoriesController.$inject = ['MenuDataService', 'catergories'];
function CategoriesController(MenuDataService, categories) {
  var catergories = this;
  categories.items = categories;
}

})();
