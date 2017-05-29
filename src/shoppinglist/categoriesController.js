/// <reference path="../../lib/angular.min.js" />

(function () {

    'use strict';

    angular.module('MenuApp')
    .controller('CategoryController', CategoryController);
    

    CategoryController.$inject = ['items'];
    function CategoryController(items) {

        var cat = this;
        
        cat.items = items;

        //cat.$onInit = function () {
            
        //    MenuDataService.getAllCategories().
        //    then(function (response) {
        //        cat.items =  response.data;

        //    })

        //};

    }



})();