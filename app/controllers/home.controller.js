/**
 * Created by Michal Wozniak on 5/10/2016.
 */
(function () {
    'use strict';

    angular
        .module('app')
        .controller('HomeController', HomeController );

    HomeController.$inject = ['$mdSidenav','$mdDialog','$rootScope','$state'];
    function HomeController($mdSidenav,$mdDialog,$rootScope,$state) {
        var vm = this;

        if($state.current.name == "home")
        {
            $rootScope.ShowAvatar = false;
            setTimeout(hideIntro,4000);
        }

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

        vm.user =
        {
            'headerTitle': 'About me',
            'avatarImageUrl': 'assets/images/michalwozniak_avatar.png',
            'content': 'My name is Michal, I am currently completing my Bachelor of Software Engineering at Concordia University in Montreal, Canada.<br/><br/> When I\'m not coding something, I will be having some fun with my Arduino or raspberry pie or maybe some amazing gadget found on Kickstarter. In my spare time, I enjoy going to the gym.',
            'buttonLabel': 'Resume',
            'buttonLink' :'https://resume.creddle.io/resume/25ohmz2xruh'
        };

        vm.showPrompt = function showDialog($event) {
            var parentEl = angular.element(document.body);
            $mdDialog.show({
                parent: parentEl,
                targetEvent: $event,
                templateUrl: 'app/views/partial/contactDialog.html',
                controller: 'ContactController as vm',
                clickOutsideToClose:true,
                bindToController: true
            });

        };
        
        function hideIntro() {
            var element = document.getElementById("IntroBody");
            element.classList.add("fadeOutUp");
        }
      

    }
})();
