(function () {
  'use strict';

  angular.module('MenuApp')
  .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider) {

    // Redirect to home page if no other URL matches
    $urlRouterProvider.otherwise('/');

    // *** Set up UI states ***
    $stateProvider

    // Home page
    .state('home', {
      url: '/',
      templateUrl: 'src/menu/templates/home.template.html'
    })

    // categories page
    .state('categories', {
      url: '/categories',
      templateUrl: 'src/menu/templates/categories.template.html',
      controller: 'CategoriesController as categories',
      resolve: {
        categories: ['MenuDataService', function (MenuDataService) {
          var promise = MenuDataService.getAllCategories();
          console.log("categories component got promise ", promise);
          return promise;
        }]
      }
    })

  }

})();