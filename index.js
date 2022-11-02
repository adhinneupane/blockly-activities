
const http = require('http');
const buffer = require('buffer')
const fs = require('fs')
var express = require('express')
var app = express()
const path = require('path');
const { resolveNaptr } = require('dns');
app.use(express.static(path.join(__dirname, '/blocklyp5/proportions/')))

app.get('/home', function (req, res) {
  res.sendFile('/Users/admin/blockly-activities/blocklyp5/proportions/index.html')
})

app.get('/tasks', function(req,res){
    res.sendFile('/Users/admin/blockly-activities/blocklyp5/proportions/tasks.html')
})

app.post('/gettasks', function(req,res){
  const templates = []
  fs.readdir('/Users/admin/blockly-activities/templates/', function (err, files) {
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    } 
    var key = 0;  
    files.forEach(function (file) {
        templates[key] = file.replaceAll('.json','')
        key = key + 1; 
    });
    console.log(templates)
    res.send(JSON.stringify(templates))
  });
})

app.use(express.json());
app.post('/serveblocks', function(req,res){
  let fileName = ((req.body).name) + '.json'
  fs.readFile('/Users/admin/blockly-activities/templates/'+ fileName, 'utf8', function(err, data){
    console.log(data);
    res.send(data)
});
})

app.use(express.json());
app.post('/save', function(req,res){
    const body = req.body
    console.log("request body from save",req.body)
    res.json("status:saved");
    fs.writeFile('templates/' + (JSON.stringify(body.name)).replaceAll('"','') + '.json', JSON.stringify(body.contents), 'utf8', (err)=>
    console.log("file saved")
    ); // write it back 
})

app.listen(8000);