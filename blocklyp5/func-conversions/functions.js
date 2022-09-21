// File executed on program run
// Block level functions and p5 program for execution

const createTable = () => {
    globalThis.table = new p5.Table();
}

const column = (columnName, value) => {
    const t = globalThis.table

    t.addColumn(columnName)

    let selRow = t.getRowCount() > 0
	? t.getRow(0)
	: t.addRow()
    
    selRow.set(columnName,value)
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
    let cgap = 0 
    let rgap = 0
    
    const t = globalThis.table
    const nrows = t.rows.length
    const ncols = t.columns.length

    console.log("nrows",nrows)
    console.log("ncols",ncols)
    
    for(let i=0; i<ncols; i++) {
	param.text(t.columns[i], 20 + cgap, 20)
	cgap += 100
    }

    for(let r=0; r<nrows; r++) {
	cgap = 0
	for(let c=0; c<ncols; c++) {
	    console.log(r,c,t.get(r,c))
	    param.text(t.getString(r,c), 20 + cgap, 20 + rgap)
	    cgap += 100
	}
	rgap += 20
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

