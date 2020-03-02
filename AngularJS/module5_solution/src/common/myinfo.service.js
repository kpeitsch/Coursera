(function () {
"use strict";

angular.module('common')
.service('MyInfoService', MyInfoService);


MyInfoService.$inject = ['$http', 'ApiPath'];
function MyInfoService($http, ApiPath) {
  var service = this;
  var user;

  service.getFavoriteMenuItem = function (u) {
    var promise =  $http.get(ApiPath + '/menu_items/' + u.favorite + '.json')

    promise.then(function (response) {
      console.log("myinfo.service getFavoriteMenuItem got response = " + response.data);
      user = u;
      user.item = response.data;
      u.message ="Your information has been saved!";
      console.log("myinfo.service getFavoriteMenuItem saved user = " + user);
      return user;
    })
    .catch(function (errorResponse) {
      console.log("UserService.getMenuItem::got error = ", errorResponse);
      console.log("UserService.getMenuItem::got error u = ", u);
      console.log("UserService.getMenuItem::got error user = ", user);
      u.message = "Menu item [" + u.favorite + "] not found!"
      user = undefined;
      console.log("myinfo.service getFavoriteMenuItem saved user = " + user);
    });
  };


  service.getUser = function () {
    console.log('service getUser user: ' + user);
    return user;
  };

  service.setUser = function (u) {
    console.log("user bekommen: " + u);
    console.log("user vorhanden: " + user);

    this.getFavoriteMenuItem(u);
    console.log("user umgespeichert: " + user);
  }

}



})();
