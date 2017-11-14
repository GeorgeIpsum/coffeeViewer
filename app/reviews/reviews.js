'use strict';

angular.module('myApp.reviews', ['ngRoute'])
    //URL should always have an id in the URL
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/reviews/:id', {
            templateUrl: 'reviews/reviews.html',
            controller: 'ReviewCtrl'
        });
    }])

    .controller('ReviewCtrl', ['$scope', '$routeParams', function($scope, $routeParams) {
        //addition of coffee "database"
        $scope.coffees = [{
                'id': 1,
                'brand': "Average Andy's Coffee",
                'name': 'Regular Coffee',
                'country': 'Denmark',
                'reviews': [{
                    'rating': 3,
                    'comment': "Could've been crispier",
                    'reviewer': "Chris P. Bacon"
                }]
            },
            {
                'id': 2,
                'brand': "Jimmy's Coffee",
                'name': 'Mocha',
                'country': 'America',
                'reviews': [{
                        'rating': 10,
                        'comment': 'What everyone should drink in the morning!',
                        'reviewer': 'Earl Lee Riser'
                    },
                    {
                        'rating': 10,
                        'comment': 'A genius of everything coffee',
                        'reviewer': 'Bob'
                    }
                ]
            },
            {
                'id': 3,
                'brand': "We Did Our Best",
                'name': 'Latte',
                'country': 'France',
                'reviews': [{
                        'rating': 1,
                        'comment': " a 'latte' yuckiness.",
                        'reviewer': 'Tim Burr'
                    },
                    {
                        'rating': 1,
                        'comment': 'Is this even coffee?',
                        'reviewer': 'Sue Flay'
                    },
                    {
                        'rating': 1,
                        'comment': 'The grossest thing I have ever had.',
                        'reviewer': 'Myles Long'
                    },
                    {
                        'rating': 5,
                        'comment': 'I dont know what the fuss is about, i dont think its too bad!',
                        'reviewer': 'Sara Bellum'
                    }
                ]
            },
            {
                'id': 4,
                'brand': "Jimmy's Special Coffee",
                'name': 'Americano',
                'country': 'America',
                'reviews': [{
                        'rating': 10,
                        'comment': 'If I could rate it higher, I would!',
                        'reviewer': 'Justin Case'
                    },
                    {
                        'rating': 10,
                        'comment': 'He does it again!',
                        'reviewer': 'Eileen Dover'
                    }
                ]
            }
        ];
        //iterate through all listed coffees
        for (var i = 0; i < $scope.coffees.length; i++) {
            //console.log($scope.coffees[i].id);
            //console.log($routeParams.id);
            //if the listed coffee is equal to the id of the routeParam (what's in the URL), then set this coffee item to be the reviewed coffee
            if ($scope.coffees[i].id == $routeParams.id) {
                //console.log("it worked?");
                $scope.reviewedCoffee = $scope.coffees[i];
                //console.log($rootScope.reviewedCoffee);
            }
        }
    }]);
