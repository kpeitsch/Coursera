(function () {
  'use strict';

  angular.module('Data')
  .component('categories', {
    templateUrl: 'src/menu/templates/catergories.template.html',
    binding: {
      catergories: '<'
    }
  });
  
})();
