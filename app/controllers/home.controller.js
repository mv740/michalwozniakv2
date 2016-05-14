/**
 * Created by Michal Wozniak on 5/10/2016.
 */
(function () {
    'use strict';

    angular
        .module('app')
        .controller('HomeController', HomeController );
    
    function HomeController($scope,$mdSidenav) {

        $scope.toggleLeft = function () {
            $mdSidenav('left').toggle();
        };
    }
    

})();
