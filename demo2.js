var app = angular.module('demo', ['gantt','gantt.sortable',
'gantt.movable',
'gantt.drawtask',
'gantt.tooltips',
'gantt.bounds',
'gantt.progress',
'gantt.table',
'gantt.tree',
'gantt.groups',
'gantt.resizeSensor',
'gantt.overlap',
'gantt.dependencies']);


app.controller('myCtrl',  ['$scope', function ($scope) {
    $scope.headersFormats = { 
        'year': 'YYYY', 
        'quarter': '[Q]Q YYYY', 
        month: 'MMMM YYYY', 
        week: function(column) {
            return column.date.format('MMM D [-]') + column.endDate.format('[ ]MMM D');}, 
        day: 'D', 
        hour: 'H', 
        minute:'H:mm',
        second:'H:mm:ss',
        millisecond:'H:mm:ss:SSS'
      };

      $scope.options = {
        maxHeight: 1000,  //max height of the gantt chart after this a vertical scroll appears, can be sent from backend or set static from UI
        viewScale: "month", //specifies the month view of the gantt chart, can be sent from backend or set static from UI
        columnWidth: 300 , // column width of the gantt chart,  can be sent from backend or set static from UI
 
    };

    $scope.data = [  
        {
            name: '大阪第一事業所①',
            height: '3em',
            sortable: true,
            children:['千原直記', '永安弘侍'],
            classes: 'bg-light gantt-row-milestone', 
            content: '<i class="glyphicon glyphicon-home"></i> {{row.model.name}}'
        },
        {
            id: '千原直記',
            name: '千原直記', tooltips: true, 
            children: ['求職者1', '求職者2'],
            content: '<i ng-click="scope.handleRowIconClick(row.model)"></i> {{row.model.name}}'

        },
        {
        name: '求職者1',
        tooltips: true,  
        content: '<input type="checkbox"></input><i class="glyphicon glyphicon-user"></i><a href="#">{{row.model.name}}</a>',
        tasks: [
            {
                id: 'アポ1',  //id of task 11
                name: 'アポ1', // display name for this task
                color: '#1BC98E',
                from: '2018-05-01T00:00:00',  //start date, it must be a timestamp
                to: '2018-05-01T23:59:00'  //end date, it must be a timestamp
            },
            {
                id:'希望入職時期1',
                name:'希望入職時期1',
                color:'#9F86FF',
                from: '2018-12-01T00:00:00',
                to: '2018-12-15T23:00:00'

            }
        ]},
        {
        name: '求職者2', tooltips: true, 
        content: '<input type="checkbox"></input><i class="glyphicon glyphicon-user"></i><a href="#">{{row.model.name}}</a>',
        tasks: [
            {
                id: 'アポ2',  //id of task 11
                name: 'アポ2', // display name for this task
                color: '#1BC98E',
                from: '2018-05-02T00:00:00',  //start date, it must be a timestamp
                to: '2018-05-02T23:59:00'  //end date, it must be a timestamp
            },
            {
                id:'希望入職時期2',
                name:'希望入職時期2',
                color:'#9F86FF',
                from: '2018-06-01T00:00:00',
                to: '2018-06-30T23:59:59'
            }
        ]},
        {
            id:'永安弘侍',
            name: '永安弘侍', tooltips: true, 
            children: ['求職者3', '求職者4'],
            content: '<i ng-click="scope.handleRowIconClick(row.model)"></i> {{row.model.name}}'

        },
        {
        name: '求職者3',
        tooltips: true,  
        content: '<input type="checkbox"></input><i class="glyphicon glyphicon-user"></i><a href="#">{{row.model.name}}</a>',
        tasks: [
            {
                id: 'アポ3',  //id of task 11
                name: 'アポ3', // display name for this task
                color: '#1BC98E',
                from: '2018-05-01T00:00:00',  //start date, it must be a timestamp
                to: '2018-05-01T23:59:00'  //end date, it must be a timestamp
            },
            {
                id:'希望入職時期3',
                name:'希望入職時期3',
                color:'#9F86FF',
                from: '2018-12-01T00:00:00',
                to: '2018-12-15T23:00:00'

            }
        ]},
        {
        name: '求職者4', tooltips: true, 
        content: '<input type="checkbox"></input><i class="glyphicon glyphicon-user"></i><a href="#">{{row.model.name}}</a>',
        tasks: [
            {
                id: 'アポ4',  //id of task 11
                name: 'アポ4', // display name for this task
                color: '#1BC98E',
                from: '2018-05-02T00:00:00',  //start date, it must be a timestamp
                to: '2018-05-02T23:59:00'  //end date, it must be a timestamp
            },
            {
                id:'希望入職時期4',
                name:'希望入職時期4',
                color:'#9F86FF',
                from: '2018-06-01T00:00:00',
                to: '2018-06-30T23:59:59'
            }
        ]}
    ];

}]);
