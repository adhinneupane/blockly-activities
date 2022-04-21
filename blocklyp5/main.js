var workspace = Blockly.inject('toolboxDiv', {toolbox: toolbox});

function reload(){
    window.location.reload();
}

const executable={

    userEntries: [],
    tableCreated : "true",
    columnNames : ['"SerialNo"'],
    sumEnabled: "false", 
    slideShow : "false", 
    countCopies: 0,
    showEnabled: "false",
    rowstoCopy : "",
    insert: function(key1,key2){
        this.userEntries.push(key1);
        this.userEntries.push(key2);
    }

} 

function runCode(){
    document.getElementById("refresh").disabled = false;
    const script = document.createElement('script');

    var code = Blockly.JavaScript.workspaceToCode(workspace);

    let executableString = 'function setup() { createCanvas(400, 400); noLoop(); textSize(30); } function draw() { background(220); columnNames = [' + executable.columnNames +']; userEntries = ['+ executable.userEntries +  ']; sumEnabled = '+ executable.sumEnabled +'; showEnabled =  '+ executable.showEnabled +'; rowstoCopy = 0; countCopies = 0; tableCreated='+ executable.tableCreated +'; slideShow =  '+ executable.slideShow +'; serialNumber = 0; pageNumber=0; if (tableCreated != true || showEnabled != true ){ alert("This program requires the following configurations:\n 1. Show must be enabled. \n 2. Table must be Created. \n 3. A table can have only 2 columns. \n 4. Copied Rows will be added to the end.") } else{ table = new p5.Table(); for(let i=0;i<3;i++) { table.addColumn(columnNames[i]); } addRow();' + executable.rowstoCopy +'  if (slideShow==false){ showTable(); } if (sumEnabled==true){ Total(); } if (slideShow ==true) { clear(); text("Mode: Slide Show",20,20); pageCounter = 1; setBtn=createButton("Next Page"); setBtn.position(1050,200); setBtn.mouseClicked(NextSlide); } } function copyRow(copiedRow){ countCopies = countCopies + 1; print("Count copies is", countCopies); serialNumber = serialNumber + 1; print("im here"); var value1 = table.getString(copiedRow,1); print ("value1", value1); var value2 = table.getString(copiedRow,2); print ("value2", value2); let newRow=table.addRow(); k = 0; newRow.setString(columnNames[0],""+serialNumber); newRow.setString(columnNames[1],""+value1); newRow.setString(columnNames[2],""+value2); } function addRow(){ for(let i=0; i<userEntries.length; i++){ serialNumber = serialNumber + 1; let addRow=table.addRow(); addRow.setString(columnNames[0],""+serialNumber); addRow.setString(columnNames[1],""+userEntries[i]); addRow.setString(columnNames[2],""+userEntries[i+1]); i = i+1 ; } } function showTable() { clear(); if (slideShow==false){ text("Mode: Default (Enable slideShow for effects).",20,20); } for (let c = 0; c < 1; c++) { text(table.columns, 20 + 80 * c, 80); } for (let r = 0; r < userEntries.length/2 + countCopies; r++) { for (let c = 0; c < 3; c++) { text(table.getString(r, c), 20 + 80 * c, 100 + 20 * r); } } } function Total(){ sumLeft =0 ; sumRight = 0; for (let c=0; c< table.getRowCount() ; c++){ sumLeft += parseInt(table.getString(c,1)); sumRight += parseInt(table.getString(c,2)); } let totalRow=table.addRow(); totalRow.setString(columnNames[0],"Sum"); totalRow.setString(columnNames[1],""+sumLeft); totalRow.setString(columnNames[2],""+sumRight); let row=table.getRowCount()-1; for (let columns = 0; columns < 3; columns++){ text(table.getString(row, columns), 20 + 80 * columns, 100 + 20 * row); } } function NextSlide(){ pageNumber = pageNumber + 1; print("page number is", pageNumber); clear(); for (let c = 0; c < 1; c++) { text(table.columns, 20 + 80 * c, 80); } for (let r = 0; r < pageNumber; r++) { for (let c = 0; c < 3; c++) { text(table.getString(r, c), 20 + 80 * c, 100 + 20 * r); } } if (pageNumber > userEntries.length/2+countCopies) { clear(); alert("You have reached the end of your slideshow");text("*******************",40,40); text("End of Slide Show!",40,55); text("*******************",40,70);} } noLoop();}'

    console.log(executableString);
    script.innerText= executableString;   
    script.setAttribute('async','true');
    script.onload = function handleScriptLoad(){
        console.log('The p5 script has loaded')      
    }    
    script.onerror = function handleScriptError(){
        console.log('An error has occured')
    }
    document.head.appendChild(script); 
    executable.userEntries = [];
    executable.tableCreated = "true";
    executable.columnNames = ['"SerialNo"'];
    executable.sumEnabled= "false";
    executable.slideShow ="false"; 
    executable.showEnabled= "false";
    console.log("executable is cleared",executableString);
    console.log(executable.rowstoCopy);
    executable.userEntries=[];
    executable.tableCreated="false";
    executable.columnNames = ['"SerialNo"'];
    executable.sumEnabled= "false";
    executable.slideShow= "false"; 
    executable.countCopies= 0;
    executable.showEnabled= "false";
    executable.rowstoCopy = "";
    document.getElementById("makeCode").disabled = true;
    document.getElementById("refresh").disabled = false;
    
}



//working code save
// function setup() { createCanvas(400, 400); noLoop(); textSize(18); } function draw() { background(220); columnNames = ["SerialNo","asd","sd"]; userEntries = [10,300,"2","5"]; sumEnabled = true; showEnabled =  true; rowstoCopy = 0; countCopies = 0; tableCreated=true; slideShow =  false; serialNumber = 0; pageNumber=0; if (tableCreated != true || showEnabled != true ){ alert("This program requires the following configurations: ") } else{ table = new p5.Table(); for(let i=0;i<3;i++) { table.addColumn(columnNames[i]); } addRow(); copyRow(0); if (slideShow==false){ showTable(); } if (sumEnabled==true){ Total(); } if (slideShow ==true) { clear(); text("Mode: Slide Show",20,20); pageCounter = 1; setBtn=createButton("Next Page"); setBtn.position(1050,200); setBtn.mouseClicked(NextSlide); } } function copyRow(copiedRow){ countCopies = countCopies + 1; print("Count copies is", countCopies); serialNumber = serialNumber + 1; print("im here"); var value1 = table.getString(copiedRow,1); print ("value1", value1); var value2 = table.getString(copiedRow,2); print ("value2", value2); let newRow=table.addRow(); k = 0; newRow.setString(columnNames[0],""+serialNumber); newRow.setString(columnNames[1],""+value1); newRow.setString(columnNames[2],""+value2); } function addRow(){ for(let i=0; i<userEntries.length; i++){ serialNumber = serialNumber + 1; let addRow=table.addRow(); addRow.setString(columnNames[0],""+serialNumber); addRow.setString(columnNames[1],""+userEntries[i]); addRow.setString(columnNames[2],""+userEntries[i+1]); i = i+1 ; } } function showTable() { clear(); if (slideShow==false){ text("Mode: Default (Enable slideShow for effects).",20,20); } for (let c = 0; c < 1; c++) { text(table.columns, 20 + 80 * c, 80); } for (let r = 0; r < userEntries.length/2 + countCopies; r++) { for (let c = 0; c < 3; c++) { text(table.getString(r, c), 20 + 80 * c, 100 + 20 * r); } } } function Total(){ sumLeft =0 ; sumRight = 0; for (let c=0; c< table.getRowCount() ; c++){ sumLeft += parseInt(table.getString(c,1)); sumRight += parseInt(table.getString(c,2)); } let totalRow=table.addRow(); totalRow.setString(columnNames[0],"Sum"); totalRow.setString(columnNames[1],""+sumLeft); totalRow.setString(columnNames[2],""+sumRight); let row=table.getRowCount()-1; for (let columns = 0; columns < 3; columns++){     text(table.getString(row, columns), 20 + 80 * columns, 100 + 20 * row); } } function NextSlide(){ pageNumber = pageNumber + 1; print("page number is", pageNumber); clear(); for (let c = 0; c < 1; c++) { text(table.columns, 20 + 80 * c, 80); } for (let r = 0; r < pageNumber; r++) { for (let c = 0; c < 3; c++) { text(table.getString(r, c), 20 + 80 * c, 100 + 20 * r); } } if (pageNumber > userEntries.length/2+countCopies){ clear(); alert("You have reached the end of your slideshow");text("*******************",40,40); text("End of Slide Show!",40,55); text("*******************",40,70);} } noLoop();}