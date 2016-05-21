/**
 * Created by Michal Wozniak on 5/10/2016.
 */
(function () {
    
    angular
        .module('app')
        .config(config);
    
    config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

    function config($stateProvider, $urlRouterProvider, $locationProvider) {

        $urlRouterProvider.otherwise('/');
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
            })
            .state('about', {
                url: '/about',
                templateUrl: 'app/views/about.html',
                authenticate : false,
                controller: 'AboutController as vm'
            })
            .state('projects', {
                url: '/projects',
                templateUrl: 'app/views/projects.html',
                authenticate : false,
                controller: 'ProjectsController as vm'
            })
            .state('homelab', {
                url: '/homelab',
                templateUrl: 'app/views/homelab.html',
                authenticate : false
            })
            .state('contact', {
                url: '/contact',
                templateUrl: 'app/views/contact.html',
                authenticate : false,
                controller: 'ContactController as vm'
            });


        $locationProvider.html5Mode(true);
    }
})();