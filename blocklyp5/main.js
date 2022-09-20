import {BlocklyCode} from './func-conversions/functions.js'

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
    // {
    //   "kind": "block",
    //   "type" :"copy_row"
    // },
    // {
    //   "kind": "block",
    //   "type" :"total_row"
    // },
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
   globalThis.code = Blockly.JavaScript.workspaceToCode(workspace);
   console.log("code",globalThis.code)
   try {
    // non changing code | main part 
    const s = ( sketch) => 
    {
      sketch.setup = () => 
      { 
        let canvas = sketch.createCanvas(500, 500); 
        sketch.noLoop();
        canvas.parent('canvasArea')
      };
      sketch.draw = () => 
      {
        // Adding user generated code to p5 program
        sketch.background(220) + BlocklyCode(globalThis.code);
      }

    }; 
    // create canvas on screen
    const drawp5 = new p5(s, document.getElementById("canvasArea"));
  } catch (e) {
    console.log(e);
    alert(e);
  }
}

