// File executed on program run
// Block level functions and p5 program for execution

const createTable = () => {
    globalThis.table = new p5.Table();
}

const column = (columnName, value) => {
    const t = globalThis.table

    t.addColumn(columnName)

    let r = 0
    while(r < t.getRowCount()) {
        let row = t.getRow(r)
        let v = row.get(columnName)
        if(!v) { row.set(columnName,0) }
        r++;
    }

    let selRow = r > 0
	    ? t.getRow(r-1)
	    : t.addRow()
    
    selRow.set(columnName,value)

}

const add_row = (rownum) => {
    const t = globalThis.table
    const nrows = t.getRowCount()

    if(nrows < 1) return;
    if(rownum < 1 || rownum > nrows) return;

    const selRow = t.getRow(rownum-1)
    const lastRow = t.getRow(nrows-1)
    const newRow = t.addRow()
    
    for(let i = 0; i < t.getColumnCount(); i++) {
	    newRow.set(i, selRow.get(i) + lastRow.get(i))
    }
}

const add_rows = (number) => {
    const t = globalThis.table
    const nrows = t.getRowCount()
    const ncols = t.getColumnCount()
    const newRow = t.addRow()

    let rmin = nrows - number
    if(rmin < 0) { rmin = 0 }
    
    for(let c=0; c<ncols;c++) {
	    newRow.set(c,0)
    }
    
    for(let r = rmin; r < nrows; r++) {
	    let selRow = t.getRow(r)
	    for(let i = 0; i < ncols; i++) {
	        newRow.set(i,newRow.get(i) + selRow.get(i))
	    }
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

const div_row = (value) => {
    const t = globalThis.table
    const nrows = t.getRowCount()
    const lastRow = t.getRow(nrows-1)
    const newRow = t.addRow()
    
    for(let i = 0; i < t.getColumnCount(); i++) {
	    newRow.set(i,lastRow.get(i) / value)
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

    param.textSize(20);

    console.log("nrows",nrows)
    console.log("ncols",ncols)
    
    param.text("row", 20 + cgap, 20)
    cgap += 100
    param.text(t.columns[0], 20 + cgap , 20)
    for(let i=1; i<ncols; i++) {
        cgap += 100 + (((t.columns[i-1]).length))*4
	    param.text(t.columns[i], 20 + cgap , 20)
    }

    for(let r=0; r<nrows; r++) {
	    cgap = 0
        param.text(r+1, 20 + cgap, 50 + rgap)
        cgap += 100
	    for(let c=0; c<ncols; c++) {
	        console.log(r,c,t.get(r,c));
	        param.text(t.getString(r,c), 20 + cgap + ((((t.columns[c]).length))), 50 + rgap )
	        cgap += 100 + ((((t.columns[c]).length))*4)
	    }
	    rgap += 30
    }
	
}

export {
    createTable,
    add_row,
    add_rows,
    copy_row,
    div_row,
    mul_row,
    column,
    showTable
}

