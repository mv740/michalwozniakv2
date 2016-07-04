/**
 * Created by Michal Wozniak on 5/20/2016.
 */
(function () {
    'use strict';
    
    angular.module('app')
        .controller('AboutController', AboutController);

    AboutController.$inject = ['$rootScope','$state'];
    function AboutController($rootScope,$state) {
        var vm = this;
        
        if($state.current.name == 'about')
        {
            $rootScope.ShowAvatar = true;
            var element = document.getElementById("IntroBody");
            if(element!= null){
                element.parentNode.removeChild(element);
            }
        }

        vm.education = {
            'headerTitle': 'Education',
            'content': [
                {
                    'degree': 'Bachelor of Engineering in Software Engineering',
                    'school': 'Concordia University',
                    'link': 'http://www.concordia.ca/',
                    'logo': 'assets/images/Concordia.jpg',
                    'location': 'Montreal, Canada',
                    'year': '2017'
                },
                {
                    'degree': 'Diploma of Collegial Studies, Pure and Applied Sciences',
                    'school': 'Collège de Maisonneuve',
                    'link': 'http://www.cmaisonneuve.qc.ca/',
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
                    'jobTitle': 'Software Developer Intern',
                    'time': 'May 2016 - currently',
                    'description': 'test',
                    'organization': 'Caboma',
                    'orgLink': 'http://www.caboma.com/',
                    'logo': 'assets/images/caboma1.png'
                }
            ]
        };

        vm.skills = {
            'background': "blue",
            'language': {
                "title": "Languages",
                "items": [
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
            'framework': {
                "title": "Frameworks",
                "items": [
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
            "data": {
                "title": "Databases",
                "items": [
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
    }
})();