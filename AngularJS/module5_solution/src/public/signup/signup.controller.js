(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['menuItemExists'];
function SignUpController(menuItemExists) {
  var $ctrl = this;
  $ctrl.menuItemExists = menuItemExists;
}

})();
