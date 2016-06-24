/**
 * Created by Michal Wozniak on 5/15/2016.
 */
(function () {

    angular
        .module('app')
        .config(configureTheme);

    configureTheme.$inject = ['$mdThemingProvider'];

    function configureTheme($mdThemingProvider) {

        $mdThemingProvider.theme('default')
            .primaryPalette('teal')
            .accentPalette('pink')
            .warnPalette('red')
            .backgroundPalette('grey');
    }
})();