/// <reference path="../../lib/angular.min.js" />

(function () {

    'use strict';

    angular.module('MenuApp')
    .controller('MenuItemsController', MenuItemsController);

    MenuItemsController.$inject = ['Items'];
    function MenuItemsController(Items) {

        var Menu = this;
        Menu.items = Items;

    }


})();