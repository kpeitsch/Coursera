(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['MyInfoService'];
function SignUpController(MyInfoService) {
  var $ctrl = this;
  var user = MyInfoService.getUser();

  $ctrl.clickButton = function() {
    MyInfoService.setUser($ctrl.user);
    console.log("info user: " + user);
  };
}

})();
