const imp = require('./update');
var genRanNum = imp.genRanNum;
var genSimPrice = imp.genSimPrice;
var genRanVol = imp.genRanVol;
var genVolInc = imp.genVolInc;

test('sinh so ngau nhien trong khoang [a,b), khong bao gom b', () =>{
    for ( var i = 0; i < 1000; i ++){
        var value = genRanNum(1,10);
        expect(value).toBeGreaterThanOrEqual(1);
        expect(value).toBeLessThan(10);
    }
});

test('Price thay doi ngau nhien trong khoang [-5,5]',()=>{
    for( var i = 0; i < 1000; i ++){
        var value = genSimPrice();
        expect(value).toBeGreaterThanOrEqual(-5);
        expect(value).toBeLessThanOrEqual(5);
    }
});

test('Volume trong khoang [1000,1 000 000]',()=>{
    for (var i = 0; i < 1000; i ++){
        var value = genRanVol();
        expect(value).toBeGreaterThanOrEqual(1000);
        expect(value).toBeLessThanOrEqual(1000000);
    }
});

test('Volume tang ngau nhien trong khoang [10,30]',()=>{
    for(var i = 0; i < 1000; i ++){
        var value = genVolInc();
        expect(value).toBeGreaterThanOrEqual(10);
        expect(value).toBeLessThanOrEqual(30);
    }
});

test('Price trong khoang [0.01,99.99]',()=>{
    for(var i = 0; i < 1000; i ++){
        var value = genRanNum(1,10000)/100;
        expect(value).toBeGreaterThanOrEqual(0.01);
        expect(value).toBeLessThanOrEqual(99.99);
    }
});