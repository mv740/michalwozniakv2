/**
 * Created by Michal Wozniak on 5/10/2016.
 */
(function () {
    
    angular
        .module('app')
        .config(config)
        .run(function ($rootScope) {
            $rootScope.ShowAvatar = false;
        });
    
    config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

    function config($stateProvider, $urlRouterProvider, $locationProvider) {

        $urlRouterProvider.otherwise('/');
        //routing
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'app/views/home.html',
                authenticate: false,
                controller: 'HomeController as vm'
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
            .state('contact', {
                url: '/contact',
                templateUrl: 'app/views/contact.html',
                authenticate : false,
                controller: 'ContactController as vm'
            });


        $locationProvider.html5Mode(true);
    }
})();