
const http = require('http');

var express = require('express')
var app = express()
const path = require('path')
app.use(express.static(path.join(__dirname, '/blocklyp5/proportions/')))

app.get('/home', function (req, res) {
//   res.setHeader('Content-Type', 'text/html')
  res.sendFile('/Users/admin/blockly-activities/blocklyp5/proportions/index.html')
})

app.listen(3000)


