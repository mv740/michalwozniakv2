/**
 * Created by Michal Wozniak on 5/20/2016.
 */
(function () {
    angular.module('app')
        .controller('AboutController', AboutController);

    function AboutController() {
        var vm = this;

        vm.user = 
            {
                'headerTitle' : 'About me',
                'avatarImageUrl': 'assets/images/michalwozniak_avatar.PNG',
                'content': 'My name is Michal, I am currently completing my Bachelor of Software Engineering at Concordia University in Montreal, Canada.<br/><br/> When I\'m not coding something, I will be having some fun with my Arduino or raspberry pie or maybe some amazing gadget found on Kickstarter. In my spare time, I enjoy going to the gym.',
                'buttonIconUrl': 'assets/icons/githubLogo.svg',
                'buttonLink': 'https://github.com/mv740/390-E-Wok',
                'buttonLabel' :'Github'
            };

        vm.education = {
            'headerTitle' : 'Education',
            'content':'1111111111111111111111111111111111'

        }
            
    }
})();