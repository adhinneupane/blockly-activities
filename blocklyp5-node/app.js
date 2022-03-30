var express = require('express');
const path = require('path');
var app = express();
var PORT = 8080;
 
app.use(express.static('public'))
app.use('/', function(request, response){    
    response.sendFile(__dirname + '/index.html');
});
 
app.get('/', function(req, res){
    console.log("File Sent")
    res.send();
});
 
app.listen(PORT, function(err){
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});