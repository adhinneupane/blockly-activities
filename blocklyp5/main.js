import {createTable,column,add_rows,copy_row,mul_row,showTable} from './func-conversions/functions.js'


const proportions_box = {
    "kind": "category",
    "name": "Proportions",
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
	    "type" :"add_rows"
	},
	{
	    "kind": "block",
	    "type" : "mul_row"
	},
	{
	    "kind": "block",
	    "type" :"show_table"
	}
	
    ]
};

const topbox = {
    "kind": "categoryToolbox",
    "contents": [
        proportions_box
    ]
}

const blocklyArea = document.getElementById('blocklyArea');
const blocklyDiv = document.getElementById('blocklyDiv');
const workspace = Blockly.inject('blocklyDiv', {toolbox: topbox});

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
	// non changing code | main part 
	const s = ( sketch) => 
	      {
		  sketch.setup = () => 
		      { 
			  let canvas = sketch.createCanvas(450, 450); 
			  sketch.noLoop();
			  canvas.parent('canvasArea')
		      };
		  sketch.draw = () => 
		      {
			  // Adding user generated code to p5 program
			  sketch.background(255);
			  try{
			      // execute Blockly generated p5 code
			      eval(code);
			  }
			  catch(e){
			      alert(e);
			  }
		      }

	      }; 
	// create canvas on screen
	const drawp5 = new p5(s, document.getElementById("canvasArea"));
    } catch (e) {
	console.log(e);
    }
}

