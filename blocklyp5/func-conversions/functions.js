// File executed on program run
// Block level functions and p5 program for execution

const createTable = () => {
    globalThis.table = new p5.Table();
}

const column = (columnName, value) => {
    globalThis.table.addColumn(columnName)
    globalThis.table.addRow().set(columnName,value)
}

const add_row = (rownum) => {
    const t = globalThis.table
    const nrows = t.getRowCount()
    const lastRow = t.getRow(nrows-1)
    const otherRow = t.getRow(rownum-1)
    const newRow = t.addRow()
    
    for(let i = 0; i < t.getColumnCount(); i++) {
	newRow.set(i,otherRow.get(i) + lastRow.get(i))
    }
}

const copy_row = (rownum) => {
    const t = globalThis.table
    const selRow = t.getRow(rownum-1)
    const newRow = t.addRow()
    
    for(let i = 0; i < t.getColumnCount(); i++) {
	newRow.set(i,selRow.get(i))
    }
}

const mul_row = (value) => {
    const t = globalThis.table
    const nrows = t.getRowCount()
    const lastRow = t.getRow(nrows-1)
    const newRow = t.addRow()
    
    for(let i = 0; i < t.getColumnCount(); i++) {
	newRow.set(i,value * lastRow.get(i))
    }
}

const showTable = (param) => {
    let gap = 0; 

    for (let i = 0; i<= table.columns.length-1; i++) {
	param.text(table.columns[i], 20 + gap ,20);
	param.text(table.get(i,i), 25 + gap, 40 );
	gap = gap + 100; 
    }
}

export {
    createTable,
    add_row,
    copy_row,
    mul_row,
    column,
    showTable
}

