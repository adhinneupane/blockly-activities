

# Blockly Activities

Frustration free math based coding activities for introduction to coding courses. 

Features: 

1. Hidden view for debugging free experience.
2. Create custom exercises for each exercise.
3. Provide part answers to complex solutions. 

### Math activities based on blockly and p5


   ```
   cd blockly-activities/blocklyp5
   npm install
   node index.js
   ```


## Composibility / Abstraction

Each block is associated with one function 

For example:  The blockly definition for input_header (.input _column_name_ , _value_) is  

```
Blockly.Blocks['input_header'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(".input")
      .
      .
      .
    }
};

```

The JS manipulation for the same block is

```
Blockly.JavaScript['input_header'] = function(block) {
    .
    .
    code = column(column,value)                     <-- ** Pre-defined Functions ** written in func-conversions/functions.js 
    return code;                                    <-- string code ++ in order of arranged blocks  
};

```

Execute the Code in p5 and create a canvas, sketch: runCode()

```
function runCode(){   
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
          eval(code);                                <-- ** blockly generated p5 code ** using functions.js
         }
        catch(e){
          console.log(e)
        }
      }

    }; 

    const drawp5 = new p5(s, document.getElementById("canvasArea"));
```

## Adding New Blocks

1. Define Block UI and add it as a file in Blocks. 
2. Write a p5 code for the block and export it as a Function. 
3. Use this function to manipulate user inputs collected from blocks. 
4. Append this to variable code ++ after each block. 
5. code ++ is executed alongside non changing p5 program part. 


