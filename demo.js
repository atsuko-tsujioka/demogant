// プラグインを使う場合
angular.module('myApp', ['gantt', 'gantt.tree']).controller('dataController',dataController);

function dataController($scope){
    $scope.options = {
        fromDate:new Date(2013, 10, 15, 14, 0, 0),
        toDate:new Date(2013, 10, 15, 17, 50, 0)}
    
     $scope.data = [   
        {name: 'row2', tasks: [
            {name: 'task3', from: new Date(2013, 10, 15, 15, 0, 0), to: new Date(2013, 10, 15, 15, 10, 0)},
            {name: 'task4', from: new Date(2013, 10, 15, 16, 20, 0), to: new Date(2013, 10, 15, 16, 50, 0)}
          ]
        }
    ]
}