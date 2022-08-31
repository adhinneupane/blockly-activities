const json = ''

let counters 
let code
let bellringer = 'caterpillar'
let username = 'ashutosh'
let blocklyWorkspace
let programCount = 0;

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

// insert blockly to front end
var blocklyArea = document.getElementById('blocklyArea');
var blocklyDiv = document.getElementById('blocklyDiv');
var workspace = Blockly.inject(blocklyDiv,
    {toolbox: document.getElementById('toolbox')});
var onresize = function(e) {
  // Compute the absolute coordinates and dimensions of blocklyArea.
  var element = blocklyArea;
  var x = 0;
  var y = 0;
  do {
    x += element.offsetLeft;
    y += element.offsetTop;
    element = element.offsetParent;
  } while (element);
  // Position blocklyDiv over blocklyArea.
  blocklyDiv.style.left = x + 'px';
  blocklyDiv.style.top = y + 'px';
  blocklyDiv.style.width = blocklyArea.offsetWidth + 'px';
  blocklyDiv.style.height = blocklyArea.offsetHeight + 'px';
  Blockly.svgResize(workspace);
};
window.addEventListener('resize', onresize, false);
onresize();
Blockly.svgResize(workspace);

let executableString = ''

// used to refresh the canvas on each run
let lastNode;

function reloadScreen(){
  let node = document.getElementById('defaultCanvas0');
  lastNode = node.lastChild;       
  if (lastNode.id == 'defaultCanvas0'){
    document.getElementById('defaultCanvas0').removeChild(lastNode);
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
   

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }


function executeBlockly(){
  code = Blockly.JavaScript.workspaceToCode(workspace);
  blocklyWorkspace = Blockly.serialization.workspaces.save(workspace);
  console.log("code is",blocklyWorkspace)
  programCount = programCount + 1;
  console.log("programCount",programCount) 
}


function runCode(){
  // backend call 
  flushObject();
  executeBlockly();
  workspaceToSave = JSON.stringify(blocklyWorkspace)
  // $.ajax({
  //   type: "POST",
  //   url: 'http://localhost:8080/uuid',
  //   data: workspaceToSave,username,bellringer,
  //   contentType: "application/json; charset=utf-8",
  //   complete: function (data) {
  //     console.log(data);
  //   }
  //   });
    
    if (programCount > 1){
        reloadScreen();
    }
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
}