/**
 * Created by Michal Wozniak on 5/15/2016.
 */
(function () {
    'use strict';
    
    angular.module('app')
        .controller('ProjectsController', ProjectsController);

    ProjectsController.$inject = ['$rootScope','$state']; 

    function ProjectsController($rootScope,$state) {
        var vm = this;

        if($state.current.name == 'projects')
        {
            $rootScope.ShowAvatar = true;
            var element = document.getElementById("IntroBody");
            if(element!= null){
                element.parentNode.removeChild(element);  
            }
        }

        vm.projects = [
            {
                'headerTitle' : 'Java',
                'subhead': 'Android application',
                'avatarIconUrl': 'assets/icons/Android_robot.svg',
                'avatarImageUrl': 'assets/images/jiraFlow.png',
                'cardTitle': 'JiraFlow',
                'cardContent': 'JiraFlow is a mobile app that provides a great experience for your Attassian\'s Jira. <ul><li>View Compagny activity stream</li> <li>Comment on task</li> <li>Create issues</li><li>Access your sprint dashboard </li></li>Drag and drop your issue in your sprint board</li></ul> <br/> Coming soon on Google Play ',
                'buttonIconUrl': 'assets/icons/Get_it_on_Google_play.svg',
                'buttonLink': '',
                'buttonLabel' :'Github'
            },
            {
                'headerTitle' : 'Java',
                'subhead': 'Android application',
                'avatarIconUrl': 'assets/icons/Android_robot.svg',
                'avatarImageUrl': 'assets/images/test.png',
                'cardTitle': 'Virtual Museum Guide',
                'cardContent': 'Android application that helps users explore the museum and its exhibitions. <ul><li>Indoor Offline map</li> <li>Estimote Beacon technology</li></ul> ',
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
                'headerTitle' : 'NodeJS',
                'subhead': 'Web application',
                'avatarIconUrl': 'assets/icons/nodejs.svg',
                'avatarImageUrl': 'assets/images/myDashboardBeta.png',
                'cardTitle': 'HomeAutomationDashboard',
                'cardContent': 'Home Dashboard made to keep me update on all my service running on my server. I created a service to easily communicate with the PRTG API<br/><br/>We can track the cpu/ram/disk usage of each of my virtual machines.<br>' ,
                'buttonIconUrl': 'assets/icons/githubLogo.svg',
                'buttonLink': 'https://github.com/mv740/POWON',
                'buttonLabel' :'Github'
            },
            {
                'headerTitle' : 'HTML/CSS',
                'subhead': 'Portfolio Website ',
                'avatarIconUrl': 'assets/icons/Windows_2012.svg',
                'avatarImageUrl': 'assets/images/michalwozniakv1.png',
                'cardTitle': 'michalwozniak.ca V1',
                'cardContent': 'It was first time trying to build a portfolio Website. I really liked the Metro Design, thus I used the Metro UI CSS Framework to design it.  To make it mobile friendly, I tried to make it look like exactly like a Windows Phone layout.',
                'buttonIconUrl': 'assets/icons/githubLogo.svg',
                'buttonLink': '',
                'buttonLabel' :'Github'
            },
            {
                'headerTitle' : 'Java',
                'subhead': 'Web Application',
                'avatarIconUrl': 'assets/icons/java.svg',
                'avatarImageUrl': 'assets/images/twibblerClient.png',
                'cardTitle': 'Twibbler',
                'cardContent': 'It is a micro-blogging service that allows clients to register, view a web-accessible profile, post messages and subscribe to receive email notification of new messages posted by other registered clients. <br/><br/>',
                'buttonIconUrl': 'assets/icons/githubLogo.svg',
                'buttonLink': '',
                'buttonLabel' :'Github'
            },
            {
                'headerTitle' : 'C++',
                'subhead': 'Embedded system',
                'avatarIconUrl': 'assets/icons/particule.png',
                'avatarImageUrl': 'assets/images/sensor.png',
                'cardTitle': 'Temperature Monitor',
                'cardContent': 'Monitor your pool\'s water temperature.<br/> <br/>  Display the temperature on a small LCD display. User can also view the temperature on a website where it is always keep up to data',
                'buttonIconUrl': 'assets/icons/githubLogo.svg',
                'buttonLink': 'https://github.com/mv740/HomeAutomationDashboard',
                'buttonLabel' :'Github'
            },
            {
                'headerTitle' : 'C#',
                'subhead': 'Web Application',
                'avatarIconUrl': 'assets/icons/csharp.png',
                'avatarImageUrl': 'assets/images/dreamSchedule.png',
                'cardTitle': 'DreamScheduler',
                'cardContent': 'A system designed to automate readjustments to the departmental sequences and optimize the resulting sequences to meet any special needs of the user',
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
                'cardContent': 'Private system where members can share information (text, photos and videos), manage their events and keep in touch.<br/><br/>The system allows people to create profiles and groups. Members share contents to other members of their group or interact among each by instant messaging.',
                'buttonIconUrl': 'assets/icons/githubLogo.svg',
                'buttonLink': 'https://github.com/mv740/POWON',
                'buttonLabel' :'Github'
            },
            {
                'headerTitle' : 'C#',
                'subhead': 'Windows phone 8 application',
                'avatarIconUrl': 'assets/icons/Windows_2012.svg',
                'avatarImageUrl': 'assets/images/calculator.png',
                'cardTitle': 'Calculator',
                'cardContent': 'Calculator the provides basic arithmetic functions. It also contain a binary converter to hexadecimal and decimal.',
                'buttonIconUrl': 'assets/icons/githubLogo.svg',
                'buttonLink': '',
                'buttonLabel' :'Github'
            }
        ]
    }
})();