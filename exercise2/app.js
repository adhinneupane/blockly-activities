var express = require('express');
const path = require('path');
var app = express();
var PORT = 3000;
 

app.use('/', function(req, res){
    
    var options = {
        root: path.join(__dirname,'/public')
    };
     
    var fileName = '/index.html';
    res.sendFile(fileName, options);
});
 
app.get('/', function(req, res){
    console.log("File Sent")
    res.send();
});
 
app.listen(PORT, function(err){
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});