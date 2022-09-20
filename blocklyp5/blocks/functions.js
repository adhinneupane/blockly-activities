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