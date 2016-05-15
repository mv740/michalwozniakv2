/**
 * Created by Michal Wozniak on 5/15/2016.
 */
(function () {
    angular.module('app')
        .controller('ProjectsController', ProjectsController);

    function ProjectsController() {
        var vm = this;

        vm.projects = [
            {
                'headerTitle' : 'CodeIgniter',
                'subhead': 'Web Application',
                'avatarIconUrl': 'assets/icons/codeigniter.svg',
                'avatarImageUrl': '',
                'cardTitle': 'Powon',
                'cardContent': 'Private system where members can share information (text, photos and videos), manage their events and keep in touch.The system allows people to create profiles and groups. Members share contents to other members of their group or interact among each by instant messaging.',
                'buttonIconUrl': 'assets/icons/githubLogo.svg',
                'buttonLink': 'https://github.com/mv740/POWON'
            },
            {
                'headerTitle' : 'Java',
                'subhead': 'Web Application',
                'avatarIconUrl': 'assets/icons/java.svg',
                'avatarImageUrl': '',
                'cardTitle': 'Twibbler',
                'cardContent': 'It is a micro-blogging service that allows clients to register, view a web-accessible profile, post messages and subscribe to receive email notification of new messages posted by other registered clients. "<br/>" User can use a GUI client to interact with the system. He can also view information about each public user through a browser.',
                'buttonIconUrl': 'assets/icons/githubLogo.svg',
                'buttonLink': ''
            },
            {
                'headerTitle' : '',
                'subhead': '',
                'avatarIconUrl': '',
                'avatarImageUrl': '',
                'cardTitle': '',
                'cardContent': '',
                'buttonIconUrl': 'assets/icons/githubLogo.svg',
                'buttonLink': ''
            }
        ]
    }
})();