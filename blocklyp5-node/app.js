import { v4 as uuid } from 'uuid';
import { fileURLToPath } from 'url';
import 'url';
import 'querystring'
import express from 'express'
import path from 'path'
import { table } from 'console';
import { type } from 'os';


var username = 'placeholder'
var tableName2 = 'submissions'
var tableName = "Usersubmissions"

import * as pg from 'pg'
const { Pool } = pg


const router = express.Router;
var app = express();
var PORT = 8080;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log('directory-name 👉️', __dirname);
console.log(path.join(__dirname,'index.html'));

app.use(express.static('public'))


app.use('/home', function(request, response){  
    response.sendFile("/Users/admin/ICT-blockly-p5/blocklyp5-node/index.html");
});


let test;
app.use('/uuid', function(request,response){
    response.send("text")
})

app.post("/run", (request, response) => {
    response.send("posted");
   });
 
app.listen(PORT, function(err){
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});