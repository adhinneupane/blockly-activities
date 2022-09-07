const json = ''
let counters 
let code
let bellringer = 'caterpillar'
let username = 'brbytes-user1'
let blocklyWorkspace
let extra

var toolbox = {
  "kind": "flyoutToolbox",
  "contents": [
    {
      "kind": "block",
      "type":"create_table"
    },
    {
      "kind": "block",
      "type" :"input_header"
    },
    {
      "kind": "block",
      "type" :"copy_row"
    },
    {
      "kind": "block",
      "type" :"total_row"
    },
    {
      "kind": "block",
      "type" :"show"
    }
 
  ]
};

function create_UUID(){
  var dt = new Date().getTime();
  var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = (dt + Math.random()*16)%16 | 0;
      dt = Math.floor(dt/16);
      return (c=='x' ? r :(r&0x3|0x8)).toString(16);
  });
  return uuid;
}




const executable={
  // user inputs as properties of this object
  userEntries: [],
  tableCreated : "false",
  columnNames : ['SNo'],
  sumEnabled: "false", 
  slideShow : "false", 
  countCopies: 0,
  showEnabled: "false",
  rowstoCopy : "",
  insert: function(key1,key2){
      this.userEntries.push(key1);
      this.userEntries.push(key2);
  },
  runProgram:0,
  rowCounter: 0,
  rowsToAdd : []
} 

counters={
  headerCount : 1,
  entryCount : 0, 
  addedCount : 0,
  copyCounter : 0
}

function reloadPage(){
  var result = confirm("Doing so will clear both: your program and output. Do you wish to continue?")
    if (result==true){
      window.location.reload();
    }
}

// insert blockly to front end
var blocklyArea = document.getElementById('blocklyArea');
var blocklyDiv = document.getElementById('blocklyDiv');
var workspace = Blockly.inject('blocklyDiv', {toolbox: toolbox});
Blockly.svgResize(workspace);

let executableString = ''

// used to refresh the canvas on each run
let lastNode;

function reloadScreen(){
// if a canvas exists, then remove it
  let node = document.getElementById('defaultCanvas0');
  if (node != null){
    node.remove()
  }
}

// flush the properties of executable object and refresh the counters
function flushObject(){
    counters.copyCounter = 0;
    executable.rowsToAdd.splice(0,executable.rowsToAdd.length);
    executable.userEntries.splice(0,executable.userEntries.length);
    executable.columnNames.splice(1,executable.columnNames.length);
    executable.tableCreated = false; 
    executable.sumEnabled= "false", 
    executable.slideShow = "false",  
    executable.countCopies= 0,
    executable.showEnabled= "false",
    executable.rowstoCopy = "";
    executable.userEntries.length = 0;
    counters.headerCount = 1,
    counters.entryCount = 0, 
    counters.addedCount = 0
}
   
// Convert Blocks into properties of Javascript object
function executeBlockly(){
  blocklyWorkspace = Blockly.serialization.workspaces.save(workspace);
  workspaceTosave = blocklyWorkspace
  code = Blockly.JavaScript.workspaceToCode(workspace);
  postName()
}

async function postName() {
  const object = { blocklyCode: workspaceTosave, username: username,email:"aneupa6@lsu.edu",executable: executable, uuid: create_UUID() };
  const response = await fetch('/uuid', {
    method: 'POST',
    body: JSON.stringify(object)
  });
  const responseText = await response.text();
  console.log(responseText); // logs 'OK'
}

// Execute the p5 Code and create canvas
function runCode(){
  // backend call 
  flushObject();
  executeBlockly();
  reloadScreen();
  const s = (p) => {
    p.setup = function () {
        myCanvas = p.createCanvas(400, 400);
        p.textSize(20);
        p.noLoop();
      };
      p.draw = function () {
        p.mousePressed=function(){
            p.NextSlide()
        }
        copyValues = [];
        rowCount = 0;
        rowsToAdd = executable.rowsToAdd;
        slideCounter = 0;
        p.background(225, 225, 225);
        //columnNames = ["SerialNo", "Caterpillar", "Leaves", "new"];
        columnNames = executable.columnNames;
        userEntries = executable.userEntries;
        sumEnabled = executable.sumEnabled;
        showEnabled = executable.showEnabled;
        rowstoCopy = 0;
        countCopies = 0;
        tableCreated = true;
        slideShow = true;
        serialNumber = 0;
        pageNumber = 0;
        table = new p5.Table();
        for (let i = 0; i < columnNames.length; i++) {
          table.addColumn(columnNames[i]);
        }
        let addRow = table.addRow();
        rowCount = rowCount + 1;
        serialNumber = 1;
        addRow.setString(columnNames[0], "" + 1);
        j = 0;
        for (let i = 1; i < columnNames.length; i++) {
          addRow.setString(columnNames[i], "" + userEntries[j]);
          j = j + 1;
        }
        function copyRow(copiedRow) {
          countCopies = countCopies + 1;
          serialNumber = serialNumber + 1;
          for (let i = 1; i < table.getColumnCount(); i++) {
            copyValues[i] = table.getString(copiedRow, i);
          }
          let newRow = table.addRow();
          newRow.setString(columnNames[0], "" + serialNumber);
          for (let i = 1; i < table.getColumnCount(); i++) {
            newRow.setString(columnNames[i], "" + copyValues[i]);
          }
        }
        for (let i = 0; i < counters.copyCounter; i ++){
            copyRow(0);
        }
          p.Total=function() {
          placeholder = 0;
          let totalRow = table.addRow();
          totalRow.setString(columnNames[0], "Sum");
          for (let i = 1; i < table.getColumnCount(); i++) {
            placeholder = parseInt(table.getString(0, columnNames[i]));
            if (rowsToAdd.length == 0) {
              rowsToAdd.length = 1;
            }
            totalRow.setString(columnNames[i], placeholder * rowsToAdd.length);
          }
        }
        if (executable.sumEnabled == true) {
          p.Total();
        }
        p.NextSlide=function() {
            p.clear();
          slideCounter = slideCounter + 1;
          p.print("click", slideCounter);
          for (let c = 0; c < 1; c++) {
            p.text(table.columns, 20 + 85 * c, 80);
          }
          for (let r = 0; r < slideCounter; r++) {
            if (slideCounter == table.getRowCount() + 1) {
                p.clear();
              for (let c = 0; c < 1; c++) {
                p.text(table.columns, 20 + 80 * c, 80);
              }
              slideCounter = 1;
            }
            for (let c = 0; c < columnNames.length; c++) {
                p.text(table.getString(r, c), 20 + 80 * c, 100 + 20 * r);
            }
          }
        }
        p.NextSlide();
      };
    };
    if(executable.showEnabled == true){
      let myp5 = new p5(s, 'defaultCanvas0');
    } 
 
  let node=document.getElementById('defaultCanvas0')
}
