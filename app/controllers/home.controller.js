/**
 * Created by Michal Wozniak on 5/10/2016.
 */
(function () {
    'use strict';

    angular
        .module('app')
        .controller('HomeController', HomeController );

    HomeController.$inject = ['$mdSidenav'];
    function HomeController($mdSidenav) {
        var vm = this;

        vm.toggleLeft = function () {
            $mdSidenav('left').toggle();
        };

         vm.links = [
            {
                'label' :'linkedin',
                'icon' : 'assets/icons/linkedin.svg',
                'link' : 'https://ca.linkedin.com/in/mv740'
            },
            {
                'label' :'github',
                'icon' : 'assets/icons/github-circle.svg',
                'link' : 'https://github.com/mv740'
            },
            {
                'label' :'twitter',
                'icon' : 'assets/icons/twitter.svg',
                'link' : 'https://twitter.com/mv740'
            }
        ];

    }
    

})();
