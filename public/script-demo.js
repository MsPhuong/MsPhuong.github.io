var promise;
var arrComs = [];
const arrComsLen = 30;
var arrCodes = ['A00.AX', 'A01.AX','A02.AX', 'A03.AX','A04.AX','A05.AX',
    'A06.AX','A07.AX','A08.AX', 'A09.AX','A10.AX','A11.AX',
    'A12.AX','A13.AX','A14.AX', 'A15.AX','A16.AX','A17.AX',
    'A18.AX','A19.AX','A20.AX','A21.AX','A22.AX','A23.AX',
    'A24.AX','A25.AX','A26.AX','A27.AX','A28.AX','A29.AX'];
var arrComName = [  'A00 company co.LTD', 'A01 company co.LTD', 'A02 company co.LTD',
    'A03 company co.LTD', 'A04 company co.LTD', 'A05 company co.LTD',
    'A06 company co.LTD', 'A07 company co.LTD', 'A08 company co.LTD',
    'A09 company co.LTD', 'A10 company co.LTD', 'A11 company co.LTD',
    'A12 company co.LTD', 'A13 company co.LTD', 'A14 company co.LTD',
    'A15 company co.LTD', 'A16 company co.LTD', 'A17 company co.LTD',
    'A18 company co.LTD', 'A19 company co.LTD', 'A20 company co.LTD',
    'A21 company co.LTD', 'A22 company co.LTD', 'A23 company co.LTD',
    'A24 company co.LTD', 'A25 company co.LTD', 'A26 company co.LTD',
    'A27 company co.LTD', 'A28 company co.LTD', 'A29 company co.LTD'];

//create Object Company's constructor
function Company(code,company){
    this.code = code;
    this.company = company;
}
//generate random number in range: min - max (exclusive max)
function genRanNum(min,max){
    return Math.floor(Math.random() * (max - min)) + min;
}

// generate simulator Price change
function genSimPrice(){
    return ((Math.round(Math.random()) * 2 - 1) * genRanNum(0,6));
}

//generate random Volume
function genRanVol(){
    return genRanNum(1000,1000001);
};

//generate random Volume increase: 10 -> 30:
function genVolInc(){
    return genRanNum(10,31);
}

// console.log(arrComs);
function update(){
    for( var i = 0; i < arrComsLen; i ++){
        arrComs[i].currentPrice += (arrComs[i].currentPrice * genSimPrice() / 100);
        arrComs[i].currentPrice = +(arrComs[i].currentPrice);
        arrComs[i].value = Math.round(arrComs[i].volume * arrComs[i].currentPrice);
        arrComs[i].currentPrice = +(arrComs[i].currentPrice.toFixed(2));
        arrComs[i].change = +(arrComs[i].currentPrice - arrComs[i].price).toFixed(2);
        if(arrComs[i].change > 0) {
            arrComs[i].color = '#08d66b';
        }else {
            arrComs[i].color = 'red';
        }
        arrComs[i].perChange = +(arrComs[i].change / arrComs[i].price).toFixed(2);
    }
    return arrComs;
};

//Array companys
for ( var i = 0; i < arrComsLen; i++){
    arrComs.push(new Company(arrCodes[i],arrComName[i]));
}

for( var i = 0; i < 30; i ++){
    arrComs[i].price = arrComs[i].currentPrice = genRanNum(1,10000)/100;
    arrComs[i].volume = genRanVol();
    // console.log(arrComs[i].price +" and " + arrComs[i].currentPrice);
}



var app = angular.module('myApp',[]);
app.controller('myCtrl',function($scope,$interval){
    var getInfo = function(){
        $scope.arrComs = update();
    };

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
