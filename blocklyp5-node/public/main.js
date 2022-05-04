var workspace = Blockly.inject('toolboxDiv', {toolbox: toolbox});
Blockly.Xml.domToWorkspace(document.getElementById('startBlocks'), workspace);
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];
let executableString = ''

function reload(){
    document.querySelector('body > button').remove();
    document.querySelector('#defaultCanvas0').remove();
    var test = document.getElementById('printscreen').
    removeAllChildNodes(test);
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

const executable={
    // object to process blockly inputs as it's properties
    userEntries: [],
    tableCreated : "false",
    columnNames : ['"SerialNo"'],
    sumEnabled: "false", 
    slideShow : "false", 
    countCopies: 0,
    showEnabled: "false",
    rowstoCopy : "",
    insert: function(key1,key2){
        this.userEntries.push(key1);
        this.userEntries.push(key2);
    },
    runProgram:0,
    rowCounter: 0,
    rowsToAdd : []
} 

function checkConstraints(){
    // checks booleans
    var modalText = ''
    if (executable.tableCreated == false){
        modalText += "No Table option selected"
    }
    if (executable.tableCreated == "false"){
        modalText += "Mandatory function: Create table. \n"
    }
    if (executable.showEnabled == "false" && executable.slideShow == "false"){
        modalText += " Mandatory function: Show or SlideShow. "
    }
    if ((modalText.toString()).localeCompare('')>0){
        document.getElementById("modal-paragraph").innerText= modalText
        modal.style.display = "block";
    } 
}

span.onclick = function(){
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

function flushObject(){
    // flush the properties of executable object
    executable.userEntries.splice(0,executable.userEntries.length);
    console.log("flushed exec is", executable.userEntries)
    executable.columnNames.splice(0,executable.columnNames.length);
    console.log("flushed exec is", executable.columnNames)
    executable.tableCreated = false; 
    executable.sumEnabled= "false", 
    executable.slideShow = "false", 
    executable.countCopies= 0,
    executable.showEnabled= "false",
    executable.rowstoCopy = "";
}

function runCode(){
    // // flush the object properties from previous run
    // flushObject();
    var code = Blockly.JavaScript.workspaceToCode(workspace); 
    
    
    // check constraints and execute compressed code
    if (executable.tableCreated==true & executable.showEnabled == true)    {
        
        document.getElementById("refresh").disabled = false;
        const script = document.createElement('script');

        executableString = 'function setup() { var myCanvas = createCanvas(600, 600); myCanvas.parent(' + 'printscreen' +'); noLoop(); textSize(20); } function draw() { copyValues = []; rowCount=0; rowsToAdd = ['+ executable.rowsToAdd + ']; slideCounter=0; background(225,225,225); columnNames = [ '+ executable.columnNames+']; userEntries = ['+executable.userEntries+']; sumEnabled = true; showEnabled =  true; rowstoCopy = 0; countCopies = 0; tableCreated=true; slideShow =  true; serialNumber = 0; pageNumber=0;  table = new p5.Table();  for(let i=0;i<columnNames.length;i++){ table.addColumn(columnNames[i]); }; setBtn=createButton("Next Page"); setBtn.position(1020,70); setBtn.mouseClicked(NextSlide); let addRow = table.addRow(); rowCount = rowCount + 1 ; serialNumber = 1; addRow.setString(columnNames[0], ""+1); j = 0; for (let i=1; i<columnNames.length; i++){ addRow.setString(columnNames[i], "" + userEntries[j]); j = j + 1; } function copyRow(copiedRow){ countCopies = countCopies + 1; serialNumber = serialNumber + 1; for (let i =1; i<table.getColumnCount(); i++){ copyValues[i] = table.getString(copiedRow,i); } let newRow=table.addRow(); newRow.setString(columnNames[0],""+ serialNumber); for (let i =1; i<table.getColumnCount(); i++){ newRow.setString(columnNames[i],""+ copyValues[i]); } }'+executable.rowstoCopy+'; function showTable() { clear(); if (slideShow==false){ text("Mode: Default (Enable slideShow for effects).",20,20); } for (let c = 0; c < 1; c++) { text(table.columns, 20 + 80 * c, 80); } for (let r = 0; r < rowCount + countCopies + totalCount; r++){ for (let c = 0; c < columnNames.length; c++) { text(table.getString(r, c), 20 + 80 * c, 100 + 20 * r); } } }  function Total(){ placeholder = 0; let totalRow = table.addRow(); totalRow.setString(columnNames[0],"Sum"); for (let i = 1; i <table.getColumnCount(); i ++){ placeholder = parseInt(table.getString(0,columnNames[i]));if(rowsToAdd.length==0){ rowsToAdd.length=1} totalRow.setString(columnNames[i],placeholder*rowsToAdd.length)  } }if('+executable.sumEnabled+'==true){Total();} function NextSlide(){ clear(); slideCounter = slideCounter + 1; print ("click",slideCounter); for (let c = 0; c < 1; c++) { text(table.columns, 20 + 80 * c, 80); } for (let r = 0; r < slideCounter; r++){ if (slideCounter == table.getRowCount()+1){ clear(); for (let c = 0; c < 1; c++) { text(table.columns, 20 + 80 * c, 80); } slideCounter = 1; } for (let c = 0; c < columnNames.length; c++) { text(table.getString(r, c), 20 + 80 * c, 100 + 20 * r); } }  } noLoop(); }'

            // write the p5 code as a script element
            console.log(executableString);


            script.innerText = executableString;   
            script.id = "testScriptName";
            script.onload = function handleScriptLoad(){
                console.log('The p5 script has loaded')      
            }    
            script.onerror = function handleScriptError(){
                console.log('An error has occured')
            }
            // immediately execute script 
            script.setAttribute('async','true');
            // inject canvas
            document.getElementById('printscreen').appendChild(script); 
            
    }
  
    }

//working code save
// function setup() { createCanvas(400, 400); noLoop(); textSize(20); } function draw() { background(220); columnNames = ["serial","2","3"]; userEntries = [2,5,6,7]; sumEnabled = true; showEnabled = true; rowstoCopy = 0; countCopies = 0; tableCreated= true; slideShow =  true; serialNumber = 0; pageNumber=0; table = new p5.Table(); for(let i=0;i<3;i++) { table.addColumn(columnNames[i]); } addRow();if (slideShow==false){ showTable(); } if (sumEnabled==true){ totalCount = 1; Total(); } if (slideShow ==true) { clear(); text("Mode: Slide Show",20,20); pageCounter = 1; setBtn=createButton("Next Page"); setBtn.position(220,05); setBtn.mouseClicked(NextSlide); }  function copyRow(copiedRow){ countCopies = countCopies + 1; print("Count copies is", countCopies); serialNumber = serialNumber + 1; print("im here"); var value1 = table.getString(copiedRow,1); print ("value1", value1); var value2 = table.getString(copiedRow,2); print ("value2", value2); let newRow=table.addRow(); k = 0; newRow.setString(columnNames[0],""+serialNumber); newRow.setString(columnNames[1],""+value1); newRow.setString(columnNames[2],""+value2); } function addRow(){ for(let i=0; i<userEntries.length; i++){ serialNumber = serialNumber + 1; let addRow=table.addRow(); addRow.setString(columnNames[0],""+serialNumber); addRow.setString(columnNames[1],""+userEntries[i]); addRow.setString(columnNames[2],""+userEntries[i+1]); i = i+1 ; } } function showTable() { clear(); if (slideShow==false){ text("Mode: Default (Enable slideShow for effects).",20,20); } for (let c = 0; c < 1; c++) { text(table.columns, 20 + 80 * c, 80); } for (let r = 0; r < userEntries.length/2 + countCopies; r++) { for (let c = 0; c < 3; c++) { text(table.getString(r, c), 20 + 80 * c, 100 + 20 * r); } } } function Total(){ sumLeft =0 ; sumRight = 0; for (let c=0; c< table.getRowCount() ; c++){ sumLeft += parseInt(table.getString(c,1)); sumRight += parseInt(table.getString(c,2)); } let totalRow=table.addRow(); totalRow.setString(columnNames[0],"Sum"); totalRow.setString(columnNames[1],""+sumLeft); totalRow.setString(columnNames[2],""+sumRight); let row=table.getRowCount()-1; for (let columns = 0; columns < 3; columns++){ text(table.getString(row, columns), 20 + 80 * columns, 100 + 20 * row); } } function NextSlide(){ print("tablke count is", table.getRowCount()); if(pageNumber>table.getRowCount()){ pageNumber=0; } pageNumber = pageNumber + 1; print("page number is", pageNumber); print("lengthofuser entry is",userEntries.length/2);clear(); for (let c = 0; c < 1; c++) { text(table.columns, 20 + 80 * c, 80); } for (let r = 0; r < pageNumber; r++) { for (let c = 0; c < 3; c++) { text(table.getString(r, c), 20 + 80 * c, 100 + 20 * r); } } if (pageNumber > userEntries.length/2+countCopies+totalCount) { clear(); alert("You have reached the end of your slideshow");text("*******************",40,40); text("End of Slide Show!",40,55); text("*******************",40,75);} } noLoop();}

//function setup() { let cnv; cnv = createCanvas(500, 500); noLoop(); textSize(20); slideCounter = 0; button = createButton("'+ 'Next Page' + '"' + ');button.position(220,50);button.mousePressed(nextSlide); function nextSlide(){ clear(); slideCounter = slideCounter + 1; print ("click",slideCounter); for (let c = 0; c < 1; c++) { text(table.columns, 20 + 80 * c, 80); } for (let r = 0; r < slideCounter; r++){ if (slideCounter == table.getRowCount()+1){ clear(); for (let c = 0; c < 1; c++) { text(table.columns, 20 + 80 * c, 80); } slideCounter = 1; } for (let c = 0; c < columnNames.length; c++) { text(table.getString(r, c), 20 + 80 * c, 100 + 20 * r); } } } cnv.mouseClicked(nextSlide); } function draw() { background(255, 255, 255); text("*******************************",50,95); text("Click to begin SlideShow",60,105); text("*******************************",50,125); columnNames = ["SNo","caterpillar","leaves","anda","eaves5"]; userEntries = [10,20,30,"40"]; sumEnabled = true; showEnabled = true; rowstoCopy = 0; countCopies = 0; tableCreated= true; slideShow =  true; serialNumber = 0; pageNumber=0; table = new p5.Table(); rowCount = 0; copiedRow = 0; rowsToAdd = [1,2,3,4]; let copyValues = []; if (sumEnabled == true){ totalCount = 1; } for(let i=0;i<columnNames.length;i++){ table.addColumn(columnNames[i]); } let addRow = table.addRow(); rowCount = rowCount + 1 ; serialNumber = 1; addRow.setString(columnNames[0], ""+1); j = 0; for (let i=1; i<columnNames.length; i++){ addRow.setString(columnNames[i], "" + userEntries[j]); j = j + 1; } function copyRow(copiedRow){ countCopies = countCopies + 1; serialNumber = serialNumber + 1; for (let i =1; i<table.getColumnCount(); i++){ copyValues[i] = table.getString(copiedRow,i); } let newRow=table.addRow(); newRow.setString(columnNames[0],""+ serialNumber); for (let i =1; i<table.getColumnCount(); i++){ newRow.setString(columnNames[i],""+ copyValues[i]); } } copyRow(' + 0 + '); copyRow('+ 1 + '); copyRow('+ 2 + '); function Total(){ let sum = []; let totalRow = table.addRow(); totalRow.setString(columnNames[0],"Sum"); k = 0; placeholder = 0; for (let j = 0 ; j < table.getColumnCount()-1; j++)  { for (let i = 0; i < rowsToAdd.length; i++ ){ sum [k] = parseInt(table.getString(rowsToAdd[i]-1,j+1)); k = k + 1; placeholder += sum[i]; } totalRow.setString(columnNames[j+1],placeholder); } } Total(); noLoop() }


