(function () {

    'use strict';

    angular.module('MenuApp')
    .component('items', {
        templateUrl: 'src/shoppinglist/templates/itemscomponent.template.html',
        bindings: {
            menuitems: '<'
        }

    });

})();