// function showTable() {
//     // overflow size = canvas size / (some ratio)
//     // begin row,column position = ( canvas size ) / (some ratio) 
//     // Table.get() to fetch row,column values.
//     // maxWidth of the table cell = (canvas size) / (some ratio) 
//     {
//     For Strings count characters and compare with a set fixed width. Break Line after this width. 
//     For images,  set a fixed display size (MaxWidth * canvas size / some ratio)
//     }
//     // Increment row, columns based on canvas size. 
//     }

canvasHeight; 
canvasWidth; 

const showTable = (param) => {
    let cgap = 0 
    let rgap = 0
    const t = globalThis.table
    const nrows = t.rows.length
    const ncols = t.columns.length
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

function showTable(){
    // set overflow for each column to: 5 % of canvas width 
    const overflow = 5/100 * canvasHeight; 
    let rgap; 
    const t = globalThis.table
    const nrows = t.rows.length
    const ncols = t.columns.length
    param.text("row", 0.045 * canvasHeight + rgap, 0.045 * canvasHeight)

    param.text("row", 20 + cgap, 20)


}
    