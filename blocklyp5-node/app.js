var express = require('express');
const path = require('path');

const router = express.Router;

var app = express();
var PORT = 8080;

app.use(express.static('public'))
app.use('/home', function(request, response){  
    response.sendFile(__dirname + '/index.html');
});
app.use('/react', function(request,response){
    response.sendFile(__dirname + '/react.js')
})
 
app.post("/run", (request, response) => {
    
    response.send("posted");
    console.log("recieved");
   });


 
app.listen(PORT, function(err){
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});