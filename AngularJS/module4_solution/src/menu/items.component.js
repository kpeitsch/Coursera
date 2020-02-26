(function () {
  'use strict';

  angular.module('MenuApp')
  .component('items', {
    templateUrl: 'src/menu/templates/itemslist.template.html',
    bindings: {
      items: '<'
    }
  });

})();
