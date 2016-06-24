/**
 * Created by Michal Wozniak on 5/14/2016.
 */
(function () {
    'use strict';

    angular
        .module('app')
        .controller('ContactController', ContactController );

    ContactController.$inject = ['$rootScope'];
    function ContactController($rootScope) {
        var vm = this;

        $rootScope.ShowAvatar = true;
        
        vm.headerTitle = "Let's Get In Touch";
        
        vm.message = "Use the contact form to get in touch, I will reply as soon as possible";
    }


})();
