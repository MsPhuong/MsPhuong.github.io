var promise;
var app = angular.module('myApp',[]);
app.controller('myCtrl',function($scope,$interval,$http){

    var getInfo = function(){
        $http.get('/update').then(function(res){
            $scope.arrComs = res.data
        });
    }

    getInfo();
    promise = $interval(getInfo,5000);

    $scope.display = function(){
        $scope.limit = 30;
        $scope.order = '';
        $scope.flag = 0;
        getInfo();
    };
    $scope.topGain = function(){
        $scope.flag = 1;
        $scope.limit = 20;
        $scope.order = '-value';
        getInfo();
    }
    $scope.topLose = function(){
        $scope.flag = 2;
        $scope.limit = 20;
        $scope.order = 'value';
        getInfo();
    }
});