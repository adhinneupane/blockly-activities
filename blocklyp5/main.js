var workspace = Blockly.inject('toolboxDiv', {toolbox: toolbox});
function makeCode(){
var code = Blockly.JavaScript.workspaceToCode(workspace);
document.getElementById("printscreen").innerHTML=executable.codeString;
}

const executable={
    user_entries: ['"aloo"','"kaloo"','"bhaloo"','"ukaloo"'],
    createtable : false,
    codeString : '',
    table_headers: '',
    // default configuration: will be manipulated later
    sum: "TRUE", 
    slideshow : true,
    number_of_rows: 2,
    user_entry_column1: 'caterpillar',
    user_entry_column2: 'paat',
    show_enabled: "TRUE",
    rowvalue1 : 2,
    rowvalue2 : 5,
    copy_row_counter: 0,
    rows_to_be_copied: ["CopyRow(1)"]
    
} 

function runCode(){
    executable.codeString = '';

    var head = document.getElementsByTagName('head')[0];


    var code = Blockly.JavaScript.workspaceToCode(workspace);


    p5Code_for_bellringer='function setup(){ createCanvas(800, 800); noLoop(); } function draw(){textSize(20); table=new p5.Table(); slideCounter=-1; number_of_columns=3; user_entry_column1=' + '"' + executable.user_entry_column1 + '"' + '; checkTrue="TRUE"; user_entry_column2=' + '"' + executable.user_entry_column2 + '"' + '; column_names=["RowNo",user_entry_column1,user_entry_column2]; user_entries=' + '[' + executable.user_entries + ']' + '; rowvalue1=2; rowvalue2=5; show_sum=' + '"' +  executable.sum + '"' + '; show_enabled="' + executable.show_enabled + '"; slideshow=' + executable.slideshow  + '; serialnumber=0; copy_row_counter=' + executable.copy_row_counter  + '; if(slideshow==true){ text("click to begin slideshow",20,20); setBtn=createButton("Next Slide"); setBtn.position(220,05); setBtn.mouseClicked(nextSlide); } for(let i=0;i<number_of_columns;i++) { table.addColumn(column_names[i]); } for(let i=0;i<user_entries.count/2;i++){ serialnumber=serialnumber+1; UserRow(); } addRow();' + executable.rows_to_be_copied + '; if (slideshow==false){ printTable(); } } function CopyRow(row_to_be_copied){ copy_row_counter = copy_row_counter + 1; RepeatBuffer=[]; serialnumber = serialnumber + 1; let i =0; for(let columns=0; columns<3;columns++) { RepeatBuffer[i]=table.getString(row_to_be_copied-1,columns),20+80*columns,100+20*row_to_be_copied-1;  i = i + 1; } let newRow=table.addRow(); k = 0; newRow.setString(column_names[0],""+serialnumber); newRow.setString(column_names[1],""+RepeatBuffer[k+1]); newRow.setString(column_names[2],""+RepeatBuffer[k+2]); } function UserRow(){ let newRow=table.addRow(); newRow.setString(column_names[0],""); newRow.setString(column_names[0],""+serialnumber); newRow.setString(column_names[1],""+rowvalue1); newRow.setString(column_names[2],""+rowvalue2); } function printTable(slideCounter) { for(let c=0;c<1;c++){ text(table.columns,20 + 80*c,80); } if (slideshow==false){ clear(); console.log("value slide counter"); for(let c=0;c<1;c++){ text(table.columns,20 + 80*c,80); } for(let rows=0; rows<user_entries.length/2+copy_row_counter; rows++){ for(let columns=0; columns<3;columns++) { text(table.getString(rows,columns),20+80*columns,100+20*rows); } } if (show_sum.localeCompare(checkTrue) > -1){ Total(); }  } if (slideshow==true){ slideCounter = slideCounter + 1; clear();  for(let c=0;c<1;c++){ text(table.columns,20 + 80*c,80); } for(let rows=0; rows<slideCounter; rows++){ for(let columns=0; columns<3;columns++) { text(table.getString(rows,columns),20+80*columns,100+20*rows); } } if (slideCounter == user_entries.length/2 && show_sum.localeCompare(checkTrue) > -1){ Total(); } if (slideCounter > user_entries.length/2 + 1){ console.log("user to be notifide"); } } } function Total(){ let newRow = table.addRow(); newRow.setString(column_names[0], "Total"); newRow.setString(column_names[1],""+""+(user_entries.length/2)*rowvalue1); newRow.setString(column_names[2],""+rowvalue2*(user_entries.length/2)); if (slideshow==true){ let rows=(user_entries.length/2); for (let columns = 0; columns < 3; columns++) { text(table.getString(rows, columns), 20 + 80 * columns, 100 + 20 * rows); } } if (slideshow==false){ let rows=(user_entries.length/2+copy_row_counter); console.log("rows",rows); for (let columns = 0; columns < 3; columns++) { text(table.getString(rows, columns), 20 + 80 * columns, 100 + 20 * rows); } } } function nextSlide(){ text("Mode: Slideshow", 20,20); slideCounter = slideCounter + 1; printTable(slideCounter); console.log("Slide count is:", slideCounter); setBtn=createButton("Next Slide"); setBtn.position(220,05); setBtn.mouseClicked(nextSlide); alert_end_of_slide = user_entries.length/2 + copy_row_counter +1; if (slideCounter>alert_end_of_slide){ alert("End of slide show"); } } function addRow(){ for(let i=0; i<user_entries.length; i++){ serialnumber = serialnumber + 1; let addRow=table.addRow(); addRow.setString(column_names[0],""+serialnumber); addRow.setString(column_names[1],""+user_entries[i]); addRow.setString(column_names[2],""+user_entries[i+1]); i = i + 1; } }';
    
    var head = document.getElementsByTagName('head')[0];
    const script = document.createElement('script');
    script.innerText= p5Code_for_bellringer;
    // script.innerText= executingcode;


    console.log("executable code is generated as:\n\n\n", script.innerText );
    script.setAttribute('async','true');
    script.onload = function handleScriptLoad(){
        console.log('The p5 script has loaded')      
    }    
    script.onerror = function handleScriptError(){
        console.log('An error has occured')
    }
    head.appendChild(script)
    document.getElementById('p5exec').innerText=p5Code_for_bellringer;

    // document.getElementById('p5exec').innerText=executingcode;
    console.log("done")
    
}