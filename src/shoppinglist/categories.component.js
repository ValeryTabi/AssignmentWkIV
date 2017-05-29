/// <reference path="../../lib/angular.min.js" />


(function () {

    'use strict';

    angular.module('MenuApp')
    .component('categories', {
        templateUrl: 'src/shoppinglist/templates/categoriescomponent.template.html',
        bindings: {
            items: '<'
        }

    });

})();