(function () {
"use strict";

angular.module('public')
.controller('MyinfoController', MyinfoController);

MyinfoController.$inject = ['userInfo'];
function MyinfoController(userInfo) {
  var $ctrl = this;
  $ctrl.user = userInfo;
  console.log('myInfoctrl user: ' + $ctrl.user);
}


})();
