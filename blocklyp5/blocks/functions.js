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
    sketch.background(220) + nonRepeatingCode(sketch)
  }  
  }; 


function nonRepeatingCode(param){
    table = new p5.Table();
    table.addColumn("caterpillar")
    table.addRow().set("caterpillar",2)
    table.addColumn("leaves")
    table.addRow().set("leaves",5)
    let gap = 0; 
    for (let i =0; i<= table.columns.length-1; i++){
      param.text(table.columns[i], 20 + gap ,20);
      param.text(table.get(i,i), 25 + gap, 40 );
      gap = gap + 100; 
    }
}

let myp5 = new p5(s, document.getElementById("canvasArea"));

