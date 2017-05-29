﻿/// <reference path="../../lib/angular.min.js" />


(function () {

    'use strict';

    angular.module('MenuApp')
    .service('MenuDataService', MenuDataService);
    //.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

    MenuDataService.$inject = ['$http'];
    function MenuDataService($http) {

        var service = this;

        service.getAllCategories = function () {
            var response = $http({
                method: "GET",
                url:  ("https://davids-restaurant.herokuapp.com/categories.json")
            });

            return response;
        };


        service.getItemsForCategory = function (categoryShortName) {
            var response = $http({
                method: "GET",
                url: ("https://davids-restaurant.herokuapp.com/menu_items.json"),
                params: {
                    category: categoryShortName
                }
            });

            return response;
        };



    }




})();