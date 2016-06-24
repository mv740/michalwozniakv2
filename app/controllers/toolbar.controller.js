/**
 * Created by Michal Wozniak on 6/24/2016.
 */
(function () {
    'use strict';

    angular
        .module('app')
        .controller('ToolBarController', ToolBarController );

    ToolBarController.$inject = ['$mdSidenav'];
    function ToolBarController($mdSidenav) {
        var vm = this;


        vm.toggleLeft = function () {
            $mdSidenav('left').toggle();
        };

        vm.close = function() {
            $mdSidenav('left').close();
        };
    }
})();
