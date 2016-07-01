/**
 * Created by Michal Wozniak on 5/14/2016.
 */
(function () {
    'use strict';

    angular
        .module('app')
        .controller('ContactController', ContactController );

    ContactController.$inject = ['$rootScope','$http','$mdDialog','$mdToast','$state'];
    function ContactController($rootScope,$http,$mdDialog,$mdToast, $state) {
        var vm = this;

        if($state.current.name == 'contact')
        {
            $rootScope.ShowAvatar = true;
        }
        
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

        vm.sendMail = function (contactForm) {

            //console.log(vm.form);

            var successCallback = function (contactForm) {
                console.log("send");
                vm.closeDialog();
                $mdToast.show(
                    $mdToast.simple()
                        .textContent('Message send!')
                        .position('bottom center')
                        .hideDelay(3000)
                );
                vm.form = {};
                contactForm.$rollbackViewValue();
                contactForm.$setPristine(); //Set pristine state
                contactForm.$setUntouched(); //Set state from touched to untouched

            };
            var errorCallback = function () {

                console.log("error");
            };

            $http.post('/v2/server/contact.php', vm.form)
                .then(successCallback(contactForm), errorCallback);

        }
    }


})();
