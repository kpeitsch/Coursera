(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.message = "";
  $scope.dishes = "";
  $scope.color = "#ccc";

  $scope.check = function () {
    var answer = "Please enter data first";
    var color = "red";
    var input = $scope.dishes;
    var words = input.split(',');
    var number = 0;

    for (var word of words) {
      if (word.trim() != "") {
        number++;
      }
    };

    if (number > 0 && number <= 3) {
      answer = "Enjoy!";
      color = "green";
    }
    else if (number > 3) {
      answer = "Too much!";
      color = "green";
    };

    $scope.message = answer;
    $scope.color = color;
  };

}

})();
