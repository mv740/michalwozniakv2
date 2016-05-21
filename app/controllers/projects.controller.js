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
                'headerTitle' : 'Java',
                'subhead': 'Android application',
                'avatarIconUrl': 'assets/icons/Android_robot.svg',
                'avatarImageUrl': 'assets/images/EWOK.png',
                'cardTitle': 'Virtual Museum Guide',
                'cardContent': 'Android application that helps users explore the museum and its exhibitions. <ul> <li>Indoor Offline map</li> <li>Estimote Beacon technology</li></ul> ',
                'buttonIconUrl': 'assets/icons/githubLogo.svg',
                'buttonLink': 'https://github.com/mv740/390-E-Wok',
                'buttonLabel' :'Github'
            },
            {
                'headerTitle' : 'Java',
                'subhead': 'Android application',
                'avatarIconUrl': 'assets/icons/Android_robot.svg',
                'avatarImageUrl': 'assets/images/calorify.png',
                'cardTitle': 'Calorify',
                'cardContent': 'Take a picture of your food and get their calorie count. <br/> <br/>It is using Clarifai powerful visual recognition API to be able to recognize items on the picture' ,
                'buttonIconUrl': 'assets/icons/githubLogo.svg',
                'buttonLink': 'https://github.com/mv740/POWON',
                'buttonLabel' :'Github'
            },
            {
                'headerTitle' : 'Java',
                'subhead': 'Web Application',
                'avatarIconUrl': 'assets/icons/java.svg',
                'avatarImageUrl': 'assets/images/twibblerClient.PNG',
                'cardTitle': 'Twibbler',
                'cardContent': 'It is a micro-blogging service that allows clients to register, view a web-accessible profile, post messages and subscribe to receive email notification of new messages posted by other registered clients. <br/><br/> User can use a GUI client to interact with the system. He can also view information about each public user through a browser.<br/><br/>',
                'buttonIconUrl': 'assets/icons/githubLogo.svg',
                'buttonLink': '',
                'buttonLabel' :'Github'
            },
            {
                'headerTitle' : 'C#',
                'subhead': 'Web Application',
                'avatarIconUrl': 'assets/icons/csharp.png',
                'avatarImageUrl': 'assets/images/dreamSchedule.PNG',
                'cardTitle': 'DreamScheduler',
                'cardContent': 'A system designed to automate readjustments to the departmental sequences and optimize the resulting sequences to meet any special needs of the user <br/><br> An Administrator can update his database automatically. A Student can customize their academic record, view course details, view the professor list, view their default sequence or create a custom one',
                'buttonIconUrl': 'assets/icons/githubLogo.svg',
                'buttonLink': '',
                'buttonLabel' :'Github'
            },
            {
                'headerTitle' : 'CodeIgniter',
                'subhead': 'Web Application',
                'avatarIconUrl': 'assets/icons/codeigniter.svg',
                'avatarImageUrl': 'assets/images/powonHome.png',
                'cardTitle': 'Powon',
                'cardContent': 'Private system where members can share information (text, photos and videos), manage their events and keep in touch.<br/><br/><br/>The system allows people to create profiles and groups. Members share contents to other members of their group or interact among each by instant messaging.<br/><br/>',
                'buttonIconUrl': 'assets/icons/githubLogo.svg',
                'buttonLink': 'https://github.com/mv740/POWON',
                'buttonLabel' :'Github'
            },
            {
                'headerTitle' : 'C#',
                'subhead': 'Windows phone 8 application',
                'avatarIconUrl': 'assets/icons/Windows_2012.svg',
                'avatarImageUrl': 'assets/images/converterCalculator.PNG',
                'cardTitle': 'Calculator',
                'cardContent': 'Calculator the provides basic arithmetic functions. It also contain a binary converter to hexadecimal and decimal.',
                'buttonIconUrl': 'assets/icons/githubLogo.svg',
                'buttonLink': '',
                'buttonLabel' :'Github'
            }
        ]
    }
})();