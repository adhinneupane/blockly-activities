import sqlite3 from 'sqlite3';
import { v4 as uuid } from 'uuid';
import { fileURLToPath } from 'url';
import 'url';
import 'querystring'

const SQLite3 = sqlite3.verbose();
const db = new SQLite3.Database('brbytes.db');

const query = (command, method = 'all') => {
  return new Promise((resolve, reject) => {
    db[method](command, (error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    });
  });
};

var username = 'placeholder'
var tableName = 'submissions'


db.serialize(async () => {
  await query(`CREATE TABLE IF NOT EXISTS ${tableName} (username text, time text, bellringer text, hash text)`, 'run');
  var result = await query(`SELECT * FROM ${tableName}`)
  console.log(result)
});

// db.serialize(async() =>{
//   //await query(`INSERT INTO posts VALUES ("${new Date().toISOString()}", "${lorem.generateWords(10)}", "Ryan Glover", "${lorem.generateParagraphs(5)}", "${tags}")`, 'run');
//   await query(`INSERT INTO ${tableName} VALUES ("${username}", "${new Date().toISOString()}","bellringerPlaceholder","${uuid()}")`,'run');   
// });

import express from 'express'
import path from 'path'
import { table } from 'console';

const router = express.Router;

var app = express();
var PORT = 8080;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log('directory-name 👉️', __dirname);
console.log(path.join(__dirname,'index.html'));

app.use(express.static('public'))
app.use(express.json());
app.use(express.urlencoded());

app.use('/home', function(request, response){  
    response.sendFile("/Users/admin/ICT-blockly-p5/blocklyp5-node/index.html");
});


app.use('/uuid', function(request,response){
    console.log(request.body)
    response.sendFile("/Users/admin/ICT-blockly-p5/blocklyp5-node/index2.html")
})
 
app.post("/run", (request, response) => {
    response.send("posted");
   });
 
app.listen(PORT, function(err){
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});