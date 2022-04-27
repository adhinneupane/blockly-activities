function setup() {
  createCanvas(400, 400);
  noLoop();
  textSize(20); 
} 

function draw() {
 background(220);
 columnNames = ["serial No","caterpillar","leaves","leaves1","leaves2"];
 userEntries = [99,98,94,93];
 sumEnabled = true;
 showEnabled = true;
 rowstoCopy = 0;
 countCopies = 0;
 tableCreated= true;
 slideShow =  true;
 serialNumber = 0;
 pageNumber=0;
 table = new p5.Table();
 rowCount = 0;
 copiedRow = 0;
let rowsToAdd = [];
let copyValues = [];

 for(let i=0;i<columnNames.length;i++){
     table.addColumn(columnNames[i]);
 }

 let addRow = table.addRow();  
 rowCount = rowCount + 1 ;
 serialNumber = 1;
 addRow.setString("serial No", ""+1);
 j = 0;
 for (let i=1; i<columnNames.length; i++){  
   addRow.setString(columnNames[i], "" + userEntries[j]);
   j = j + 1;
 }
 
 function showTable() { 
     clear();
     if (slideShow==false){
     text("Mode: Default (Enable slideShow for effects).",20,20); 
     }
     for (let c = 0; c < 1; c++) {
     text(table.columns, 20 + 80 * c, 80); 
     } 
     for (let r = 0; r < rowCount + countCopies; r++){ 
     for (let c = 0; c < columnNames.length; c++) {
              text(table.getString(r, c), 20 + 80 * c, 100 + 20 * r);
          }
     } 
 } 
  
function copyRow(copiedRow){
countCopies = countCopies + 1;
serialNumber = serialNumber + 1;
for (let i =1; i<table.getColumnCount(); i++){
 copyValues[i] = table.getString(copiedRow,i);
}
  
let newRow=table.addRow();
newRow.setString(columnNames[0],""+ serialNumber); 
for (let i =1; i<table.getColumnCount(); i++){
 newRow.setString(columnNames[i],""+ copyValues[i]);   
}
} 

copyRow('0');
copyRow('1');
copyRow('2');
  
function Total(rowsToAdd){
let sum = [];
let placeholder = 0;
for (let i = 1; i <table.getColumnCount(); i++){
 for (let j=0; j<table.getRowCount(); j++){
   sum[i] = 0;
   placeholder = '' 
 }
}
}

Total();

showTable();

}