

# Blockly + p5

### Interactive Bellringers for Introduction to Computing Courses

1.  
   ```
   git clone git@github.com:ashutoshneupane/brbytes.git
   ```
    
2. 
   ```
   cd ICT-blockly-p5
   cd blocklyp5
   python3 -m http.server
   ```

3.  
   ```
   visit localhost:8000
   ```

## How it works: 

Source Program for p5 is in blocks/function.js 

```
// Block level functions and p5 program for execution

const createTable = () => {
  table = new p5.Table();
}

const column = (columnName, value) => {
  table.addColumn(columnName)
  table.addRow().set(columnName,value)
}

const showTable = (param) => {
  let gap = 0; 
  for (let i =0; i<= table.columns.length-1; i++){
    param.text(table.columns[i], 20 + gap ,20);
    param.text(table.get(i,i), 25 + gap, 40 );
    gap = gap + 100; 
  }
}

// composable function that will change depending on user organization of blocks
const BlocklyCode = (sketch) =>
 {
 createTable();
 column("caterpillar",2);
 column("leaves",5);
 // more p5 functions for blockly will be added here
 showTable(sketch);
 }


// non changing code
 const s = ( sketch ) => 
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
    sketch.background(220) + BlocklyCode(sketch);
  }

}; 

// create canvas on screen
const drawp5 = new p5(s, document.getElementById("canvasArea"));

```


## Composibility / Abstraction

Each block is associated with one of these functions for example:

Input Header is associated to function: CreateTable defined in func-conversions/functions.js

```
//The Block Definition for it is: 

Blockly.Blocks['input_header'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(".input")
          .appendField(new Blockly.FieldTextInput("columnName"), "col1")
          .appendField(new Blockly.FieldTextInput("value"), "value");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(270);
   this.setTooltip(" Set the column Name, value in a table object. \n Type: Object Property \n Example: [Object].input (heightInFeet)(6)");
   this.setHelpUrl("");
    }
};


// Generating p5 code step-1

Blockly.JavaScript['input_header'] = function(block) {
    let columnName = block.getFieldValue('col1')
    let value = block.getFieldValue('value')
    code = column(col1,value)                      <-- func-conversions/functions.js
    return code;                                   <-- string code ++ in order of arranged blocks  
};

// Generating p5 code step-2 



function runCode(){   
  reloadScreen()

  // non-changing code (Setup() is same for all executions. Draw includes Dynamic P5 code as a string code)

   var code = Blockly.JavaScript.workspaceToCode(workspace);
   try {
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
        sketch.background(220);
        try{
          eval(code);                                <-- execute blockly generated p5 code written as on-demand functions
         }
        catch(e){
          console.log(e)
        }
      }

    }; 

    // create canvas on screen
    const drawp5 = new p5(s, document.getElementById("canvasArea"));



```