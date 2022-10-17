
const http = require('http');
// const write = require('writeFile')
const buffer = require('buffer')
const fs = require('fs')

// var obj = {
//     table: []
//  };

// obj.table.push({id: 1, square:2});

// var json = JSON.stringify(obj);

// var fs = require('fs');
// fs.writeFile('myjsonfile.json', json, 'utf8', (err) => {
//     console.log(err)
// });

// fs.readFile('templates/myjsonfile.json', 'utf8', function readFileCallback(err, data){
//     if (err){
//         console.log(err);
//     } else {
//     obj = JSON.parse(data); //now it an object
//     obj.table.push({id: 2, square:3}); //add some data
//     json = JSON.stringify(obj); //convert it back to json
  
// }});

// fs.readFile('templates/myjsonfile.json', 'utf8', function readFileCallback(err, data){
//     if (err){
//         console.log(err);
//     } else {
//     obj = JSON.parse(data); //now it an object
//     obj.table.push({id2: 2, square2:3}); //add some data
//     json = JSON.stringify(obj); //convert it back to json
//     fs.writeFile('myjsonfile.json', json, 'utf8', (err)=>
//     console.log(err)
//     ); // write it back 
// }});

var express = require('express')
var app = express()
const path = require('path')
app.use(express.static(path.join(__dirname, '/blocklyp5/proportions/')))

app.get('/home', function (req, res) {
//   res.setHeader('Content-Type', 'text/html')
  res.sendFile('/Users/admin/blockly-activities/blocklyp5/proportions/index.html')
})

app.get('/tasks', function(req,res){
    res.sendFile('/Users/admin/blockly-activities/blocklyp5/proportions/tasks.html')
})

app.use(express.json());
app.post('/save', function(req,res){
    const body = req.body
    const templateBlocks = JSON.stringify(body)
    console.log(JSON.stringify(body))
    res.json("status:saved");
    fs.writeFile('templates/ss.json', templateBlocks, 'utf8', (err)=>
    console.log('error')
    ); // write it back 
})

app.listen(8000);