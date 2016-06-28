/**
 * Created by Michal Wozniak on 5/14/2016.
 */
(function () {
    'use strict';

    angular
        .module('app')
        .controller('ContactController', ContactController );

    ContactController.$inject = ['$rootScope','$http','$mdDialog'];
    function ContactController($rootScope,$http,$mdDialog) {
        var vm = this;

        $rootScope.ShowAvatar = true;
        
        vm.headerTitle = "Let's Get In Touch";
        
        vm.message = "Use the contact form to get in touch, I will reply as soon as possible";

        //initial empty form
        vm.form = {};

        vm.closeDialog = function() {
            $mdDialog.hide();
        };

        vm.test = function () {
            console.log("test");
        };

        vm.sendMail = function () {

            console.log(vm.form);

            var successCallback = function () {
                console.log("send");
            };
            var errorCallback = function () {
                console.log("error");
            };

            $http.post('/v2/server/contact.php', vm.form)
                .then(successCallback, errorCallback);

        }
    }


})();
