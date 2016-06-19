/**
 * Created by Michal Wozniak on 5/20/2016.
 */
(function () {
    angular.module('app')
        .controller('AboutController', AboutController);

    AboutController.$inject = ['$mdDialog'];

    function AboutController($mdDialog) {
        var vm = this;

        vm.user =
        {
            'headerTitle': 'About me',
            'avatarImageUrl': 'assets/images/michalwozniak_avatar.png',
            'content': 'My name is Michal, I am currently completing my Bachelor of Software Engineering at Concordia University in Montreal, Canada.<br/><br/> When I\'m not coding something, I will be having some fun with my Arduino or raspberry pie or maybe some amazing gadget found on Kickstarter. In my spare time, I enjoy going to the gym.',
            'buttonLabel': 'Resume',
            'buttonLink' :'https://resume.creddle.io/resume/25ohmz2xruh'
        };

        vm.education = {
            'headerTitle': 'Education',
            'content': [
                {
                    'degree': 'Bachelor of Engineering in Software Engineering',
                    'school': 'Concordia University',
                    'link' : 'http://www.concordia.ca/',
                    'logo': 'assets/images/Concordia.jpg',
                    'location': 'Montreal, Canada',
                    'year': '2017'
                },
                {
                    'degree': 'Diploma of Collegial Studies, Pure and Applied Sciences',
                    'school': 'Collège de Maisonneuve',
                    'link' : 'http://www.cmaisonneuve.qc.ca/',
                    'logo': 'assets/images/College_de_Maisonneuve.jpeg',
                    'location': 'Montreal, Canada',
                    'year': '2011'
                }
            ]
        };
        
        vm.work = {
            'headerTitle': 'Experience',
            'content': [
                {
                    'jobTitle' : 'Software Developer Intern',
                    'time' : 'May 2016 - currently',
                    'description': 'test',
                    'organization': 'Caboma',
                    'orgLink' :'http://www.caboma.com/',
                    'logo' : 'assets/images/caboma1.png'
                }
            ]
        };
        
        vm.skills = {
            'background': "blue",
            'language': {
                "title": "Languages",
                "items" : [
                    {
                        'item': 'C#',
                        'icon': 'assets/icons/csharp.svg'
                    },
                    {
                        'item': 'Java',
                        'icon': 'assets/icons/java.svg'
                    },
                    {
                        'item': 'JavaScript',
                        'icon': 'assets/icons/javascript.svg'
                    },
                    {
                        'item': 'HTML5',
                        'icon': 'assets/icons/html5.svg'
                    },
                    {
                        'item': 'CSS3',
                        'icon': 'assets/icons/css3.svg'
                    },
                    {
                        'item': 'PHP',
                        'icon': 'assets/icons/PHP-logo.svg'
                    }
                ]
            },
            'framework' : {
                "title" : "Frameworks",
                "items" : [
                    {
                        'item': 'Android',
                        'icon': 'assets/icons/android.svg'
                    },
                    {
                        'item': 'NodeJS',
                        'icon': 'assets/icons/nodejs.svg'
                    },
                    {
                        'item': 'AngularJS',
                        'icon': 'assets/icons/angular-icon.svg'
                    },
                    {
                        'item': 'CodeIgniter',
                        'icon': 'assets/icons/codeigniter.svg'
                    }
                ]
            },
            "data" : {
                "title" : "Databases",
                "items" : [
                    {
                        'item': 'SQL',
                        'icon': 'assets/icons/mysql.svg'
                    },
                    {
                        'item': 'Neo4j',
                        'icon': 'assets/icons/neo4j_logo.svg'
                    }
                ]
            }
        };

        
        
        vm.showPrompt = function showDialog($event) {
            var parentEl = angular.element(document.body);
            $mdDialog.show({
                parent: parentEl,
                targetEvent: $event,
                templateUrl: 'app/views/partial/contactDialog.html',
                locals: {
                    items: vm.items
                },
                controller: DialogController,
                controllerAs: 'vm',
                clickOutsideToClose:true,
                bindToController: true
            });
            function DialogController($mdDialog, items) {
                var vm = this;
                vm.items = items;
                vm.submit = function () {
                  console.log(vm.items)
                };
                vm.closeDialog = function() {
                    $mdDialog.hide();
                }
            }
        }
        


    }
})();