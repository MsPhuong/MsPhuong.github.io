var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var arr = [];
var update = require('./update').update;

var app = express();
//Body Parser MIddleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Set Static Path
app.use(express.static(path.join(__dirname, 'public')));

app.get('/update',function(req, res){
    res.send(arr);
});

app.listen(1234,function(){
    console.log('Server is listening on port: 1234');
});


var returnValue = function(){
   arr = update();
} ;
setInterval(returnValue,5000);

