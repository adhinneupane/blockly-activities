// File executed on program run
// Block level functions and p5 program for execution

 const createTable = () => {
  globalThis.table = new p5.Table();
}

 const column = (columnName, value) => {
  globalThis.table.addColumn(columnName)
  globalThis.table.addRow().set(columnName,value)
}

 const showTable = (param) => {
  let gap = 0; 
  for (let i =0; i<= table.columns.length-1; i++){
    param.text(table.columns[i], 20 + gap ,20);
    param.text(table.get(i,i), 25 + gap, 40 );
    gap = gap + 100; 
  }
}

export {createTable,column,showTable}

