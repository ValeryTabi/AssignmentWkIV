/// <reference path="../lib/angular.min.js" />

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
            templateUrl: 'src/shoppinglist/templates/home.template.html'
        })

        // Premade list page
        .state('categories', {
            url: '/categories',
            templateUrl: 'src/shoppinglist/templates/categories.template.html',
            controller: 'CategoryController as cat',
            resolve: {
                items: ['MenuDataService', function (MenuDataService) {
                    return MenuDataService.getAllCategories()
                        .then(function (res) {
                             return res.data;
                    });
                }]
            }
        })

        .state('menuItems', {
            url: '/menuItems/{category}',
            templateUrl: 'src/shoppinglist/templates/menuItems.template.html',
            controller: 'MenuItemsController as Menu',
            resolve: {
                Items: ['$stateParams', 'MenuDataService',
                      function ($stateParams, MenuDataService) {
                          return MenuDataService.getItemsForCategory($stateParams.category)
                            .then(function (items) {
                                console.log(items.data.menu_items);
                                return items.data.menu_items;
                            });
                      }]
            }
        })
        ;
    }

})();

