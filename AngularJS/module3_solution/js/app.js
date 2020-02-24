(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', FoundItemsDirective);

function FoundItemsDirective() {
  var ddo = {
    restrict: 'E',
    templateUrl: 'foundItems.html',
    scope: {
      foundItems: '<',
      onRemove: '&'
    },

  controller: NarrowItDownController,
  controllerAs: 'controller',
  bindToController: true
  };

  return ddo;
}


NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var menu = this;
  menu.searchTerm = "";

  menu.listItems = function () {
    var promise = MenuSearchService.getMatchedMenuItems(menu.searchTerm);

    console.log("promise: " + promise);

    promise.then(function (response) {
      menu.found = response.data;
    })
    .catch(function (error) {
      console.log("Something went terribly wrong.");
    });

    console.log("menu: " + menu);
  };

  menu.removeItem = function (index) {
    menu.found.splice(index, 1);
  };
}


MenuSearchService.$inject = ['$http'];
function MenuSearchService($http) {
  var service = this;

  service.getMatchedMenuItems = function (searchTerm) {
    return $http({
      method: "GET",
      url: "https://davids-restaurant.herokuapp.com/menu_items.json"})
      .then(function (result) {
      // process result and only keep items that match
      var foundItems = result.data;

      console.log("result: " +  result);s
      console.log("foundItems: " + foundItems);

      // for(var index=0; index < foundItems.length ; index++){
      //   if (foundItems[index] !== searchTerm){
      //     foundItems.splice(index,1);
      //   }
      // };

      // return processed items
      return foundItems;
    });
  };

}

})();
