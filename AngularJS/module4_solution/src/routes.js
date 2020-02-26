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

    // catergories page
    .state('categories', {
      url: '/categories',
      templateUrl: 'src/shoppinglist/templates/catergories.template.html',
      controller: 'CategoriesController as catergories',
      resolve: {
        catergories: ['MenuDataService', function (MenuDataService) {
          return MenuDataService.getAllCategories();
        }]
      }
    })

  }

})();
