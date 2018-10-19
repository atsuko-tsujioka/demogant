(function () {
    'use strict';

    var app = angular.module('plnkrGanttStable',
        ['gantt',
            'gantt.tooltips',
            'gantt.bounds',
            'gantt.tree',
            'gantt.groups',
            'gantt.overlap'
        ]);

    app.controller('Ctrl', ['$scope', function ($scope) {


        $scope.options = {
            maxHeight: 850,  //max height of the gantt chart after this a vertical scroll appears, can be sent from backend or set static from UI
            viewScale: "month", //specifies the month view of the gantt chart, can be sent from backend or set static from UI
            columnWidth: 80  // column width of the gantt chart,  can be sent from backend or set static from UI
        };

        $scope.data = [
            {
                name: 'Milestone 1',    //name of milestone
                children: ['Task 11', 'Task 12', 'Task 13', 'Task 14'],  //tasks inside this milestone
                content: '<i class="fa fa-map-marker" ng-click="scope.handleRowIconClick(row.model)"></i> {{row.model.name}}'  // no need to send this from backend
            },
            {
                name: 'Task 11', tooltips: true, tasks: [
                {
                    id: 'work_111',  //id of task 11
                    name: 'Work 111', // display name for this task
                    color: '#a61229',  //the time color for this task
                    from: '2017-05-01T00:00:00',  //start date, it must be a timestamp
                    to: '2017-05-31T23:59:00'  //end date, it must be a timestamp
                }
            ]
            },
            {
                name: 'Task 12', tasks: [
                {
                    id: 'work_112',
                    name: 'Work 112',
                    color: '#a61229',
                    from: '2017-05-01T00:00:00',
                    to: '2017-05-31T23:59:00'
                }
            ]
            },
            {
                name: 'Task 13', tasks: [
                {
                    id: 'work_113',
                    name: 'Work 113',
                    color: '#a61229',
                    from: '2017-05-01T00:00:00',
                    to: '2017-05-31T23:59:00'
                }
            ]
            },
            {
                name: 'Task 14', tasks: [
                {
                    id: 'work_114',
                    name: 'Work 114',
                    color: '#a61229',
                    from: '2017-05-01T00:00:00',
                    to: '2017-05-31T23:59:00'
                }
            ]
            },

            {
                name: 'Milestone 2',
                children: ['Task 21', 'Task 22', 'Task 14'],
                content: '<i class="fa fa-map-marker" ng-click="scope.handleRowIconClick(row.model)"></i> {{row.model.name}}'
            },
            {
                name: 'Task 21', tooltips: true, tasks: [
                {
                    id: 'work_211',
                    name: 'Work 211',
                    color: '#a61229',
                    from: '2017-06-01T00:00:00',
                    to: '2017-06-30T23:59:00'
                }
            ]
            },
            {
                name: 'Task 22', tasks: [
                {
                    id: 'work_212',
                    name: 'Work 212',
                    color: '#a61229',
                    from: '2017-06-01T00:00:00',
                    to: '2017-06-30T23:59:00'
                }
            ]
            },
            {
                name: 'Task 14', tasks: [
                {
                    id: 'work_213',
                    name: 'Work 213',
                    color: '#a61229',
                    from: '2017-06-01T00:00:00',
                    to: '2017-06-30T23:59:00'
                }
            ]
            },

            {
                name: 'Milestone 3',
                children: ['Task 31', 'Task 32', 'Task 33'],
                content: '<i class="fa fa-map-marker" ng-click="scope.handleRowIconClick(row.model)"></i> {{row.model.name}}'
            },
            {
                name: 'Task 31', tooltips: true, tasks: [
                {
                    id: 'work_311',
                    name: 'Work 311',
                    color: '#a61229',
                    from: '2017-07-01T00:00:00',
                    to: '2017-09-30T23:59:00'
                }
            ]
            },
            {
                name: 'Task 32', tasks: [
                {
                    id: 'work_312',
                    name: 'Work 312',
                    color: '#a61229',
                    from: '2017-07-01T00:00:00',
                    to: '2017-09-30T23:59:00'
                }
            ]
            },
            {
                name: 'Task 33', tasks: [
                {
                    id: 'work_313',
                    name: 'Work 313',
                    color: '#a61229',
                    from: '2017-07-01T00:00:00',
                    to: '2017-09-30T23:59:00'
                }
            ]
            }
        ];
    }]);
})();

