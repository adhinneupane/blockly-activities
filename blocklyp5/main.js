
import {drawp5,s,nonRepeatingCode} from './blocks/functions'
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

var blocklyArea = document.getElementById('blocklyArea');
var blocklyDiv = document.getElementById('blocklyDiv');
var workspace = Blockly.inject('blocklyDiv', {toolbox: toolbox});

function reloadScreen(){
// if a canvas exists, then remove it
  let node = document.getElementById('defaultCanvas0');
  if (node != null){
    node.remove()
  }
}

document.getElementById('p5Run').onclick = function() {
  runCode();
};

function runCode(){
  reloadScreen()
   let code = Blockly.JavaScript.workspaceToCode(workspace);
   try {
    s;
    drawp5;
  } catch (e) {
    alert(e);
  }
}
