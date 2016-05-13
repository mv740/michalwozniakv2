/**
 * Created by Michal Wozniak on 5/10/2016.
 */
(function () {
    
    angular
        .module('app')
        .config(config);
    
    config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

    function config($stateProvider, $urlRouterProvider, $locationProvider) {

        $urlRouterProvider.otherwise('/partial1');
        //routing
        $stateProvider
            .state('partial1', {
                url: '/',
                templateUrl: 'app/views/partial1.html',
                authenticate: false
            })
            .state('state2', {
                url: '/state2',
                templateUrl: 'app/views/partial2.html',
                authenticate : false
            });


        $locationProvider.html5Mode(true);
    }
})();