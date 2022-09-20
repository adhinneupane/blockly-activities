// File executed on program run
// Block level functions and p5 program for execution


export const createTable = () => {
  globalThis.table = new p5.Table();
}

export const column = (columnName, value) => {
  globalThis.table.addColumn(columnName)
  globalThis.table.addRow().set(columnName,value)
}

export const showTable = (param) => {
  let gap = 0; 
  for (let i =0; i<= table.columns.length-1; i++){
    param.text(globalThis.table.columns[i], 20 + gap ,20);
    param.text(globalThis.table.get(i,i), 25 + gap, 40 );
    gap = gap + 100; 
  }
}

// composable function that will change depending on user organization of blocks
export const BlocklyCode = (sketch) =>
 {
 createTable();
 column("caterpillar",2);
 column("leaves",5);
 // more p5 functions for blockly will be added here
 showTable(sketch);
 }


export const sum = () => {
 globalThis.a = 20;
 b = 30;
 c = a + b; 
}

const finalTaskName = 'abc'
const finalQuantityTaskExecuted = 0
const finalQuantityTaskCompletion = 100

export {finalTaskName, finalQuantityTaskExecuted, finalQuantityTaskCompletion}