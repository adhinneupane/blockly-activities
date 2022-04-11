var workspace = Blockly.inject('toolboxDiv', {toolbox: toolbox});
function makeCode(){
var code = Blockly.JavaScript.workspaceToCode(workspace);
document.getElementById("printscreen").innerHTML=executable.codeString;
}

const executable={
    createtable : false,
    codeString : '',
    table_headers: '',
    // default configuration: will be manipulated later
    sum: false, 
    slideshow : false,
    number_of_rows: 2,
    user_entry_column1: '',
    user_entry_column2: '',
    show_enabled: false,
    rowvalue1 : 0,
    rowvalue2 : 0,
    row_counter: 0
} 

function runCode(){
    executable.codeString = ''
    const script = document.createElement('script');
    var code = Blockly.JavaScript.workspaceToCode(workspace);
    console.log(executable.row_counter);
    p5Code_for_bellringer = 'function setup(){ createCanvas(500, 500); noLoop() } function draw(){ clear();textSize(20); table=new p5.Table(); number_of_rows=' + executable.number_of_rows + ';' + 'number_of_columns = 3; user_entry_column1=' + '"' + executable.user_entry_column1 + '"' + ';' +'checkTrue="TRUE";' +
    'user_entry_column2=' + '"' + executable.user_entry_column2 + '"' + ';' + 'column_names=["S.No",user_entry_column1,user_entry_column2]; rowvalue1=' + executable.rowvalue1 + ';rowvalue2=' + executable.rowvalue2 + '; show_sum=' + '"' +executable.sum + '"' + '; show_enabled=' + '"' + executable.show_enabled + '"' + '; slideshow=' + executable.slideshow + '; if(slideshow==true){text("click to begin slideshow",20,20); setBtn=createButton("Next Slide"); setBtn.position(220,5); setBtn.mouseClicked(nextSlide); } for(let i=0;i<number_of_columns;i++) {table.addColumn(column_names[i]); } for(let i=0;i<number_of_rows;i++){ UserRow(); } if(show_enabled.localeCompare(checkTrue) > -1 ) { printTable(); } }function UserRow(){ let newRow=table.addRow(); newRow.setString(column_names[0],""); newRow.setString(column_names[1],""+rowvalue1); newRow.setString(column_names[2],""+rowvalue2); } function printTable() { for(let c=0;c<1;c++){ text(table.columns,20 + 80*c,80); }for(let rows=0; rows<number_of_rows; rows++){ for(let columns=0; columns<3;columns++) { text(table.getString(rows,columns),20+80*columns,100+20*rows); } }if(show_sum.localeCompare(checkTrue) > -1) { Total(); } } function Total(){ let newRow = table.addRow(); newRow.setString(column_names[0], "Total"); newRow.setString(column_names[1],""+""+number_of_rows*rowvalue1); newRow.setString(column_names[2],""+rowvalue2*number_of_rows); for (let rows = 0; rows < number_of_rows+1; rows++) { for (let columns = 0; columns < 3; columns++) { text(table.getString(rows, columns), 20 + 80 * columns, 100 + 20 * rows); } } } function nextSlide(){ clear(); text("slideshow has started", 20,20); printTable(); }'
    
    // writing p5 code as HTML Element 
    script.innerText= p5Code_for_bellringer;
    console.log("executable code is generated as:\n\n\n", script.innerText );
    script.setAttribute('async','true');
    script.onload = function handleScriptLoad(){
        console.log('The p5 script has loaded')      
    }    
    script.onerror = function handleScriptError(){
        console.log('An error has occured')
    }
    document.head.appendChild(script); 
}