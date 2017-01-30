'use strict';

eventsApp.factory('eventData', function () {
    return {
        event: {
            name: 'Angular Boot Camp',
            date: '1/28/2017',
            time: '3:00 pm',
            location: {
                address: 'Guru\' home',
                city: 'San diego',
                state: 'CA'
            },
            imageUrl: 'img/angularjs-logo.png',
            sessions: [{
                name: 'Directive MasterClass',
                creatorName: 'Bob Smith',
                duration: 1,
                level: 'Advanced',
                abstract: 'In this session you will learn the ins and out of directives!',
                upVoteCount: 0

            },
            {
                name: 'Scopes for fun and profit',
                creatorName: 'John Doe',
                duration: 3,
                level: 'Introductory',
                abstract: 'This session will take a closer look at scope',
                upVoteCount: 0

            },
            {
                name: 'Well Behaved controllers',
                creatorName: 'Jane Doe',
                duration: 4,
                level: 'Intermediate',
                abstract: 'controller are the beginning of everything',
                upVoteCount: 0

            }
            ]
        }
    };
});
