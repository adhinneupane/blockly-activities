function setup() {
  createCanvas(900, 900);
  noLoop();
  textSize(20); 
} 

function draw() {
 background(220);
 columnNames = ["serial No","caterpillar","leaves","leaves1","leaves2","leaves3","leaves4"];
 userEntries = [10,20,30,40,50,60];
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
 rowsToAdd = [1,2,3,4];
let copyValues = [];
  if (sumEnabled == true){
    totalCount = 1; 
  }

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
     for (let r = 0; r < rowCount + countCopies + totalCount; r++){ 
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
  
function Total(){
let sum = []
let totalRow = table.addRow();
totalRow.setString(columnNames[0],"Sum");
k = 0;
placeholder = 0;
  // totalRow.setString(table.getRowCount()-1,0, ""+ "Sum");

for (let j = 0 ; j < table.getColumnCount()-1; j++)  {
  for (let i = 0; i < rowsToAdd.length; i++ ){
      sum [k] = parseInt(table.getString(rowsToAdd[i]-1,j+1));  
      k = k + 1;  
      placeholder += sum[i];
  }
  print(sum);
  print (placeholder);
  totalRow.setString(columnNames[j+1],placeholder);
  }
  print ("rows", table.getRowCount())
  print ("columns",table.getColumnCount())
  for (let j = 0 ; j <= table.getColumnCount()-1; j++)  {
    print(table.getString(table.getRowCount()-1, j));
  text(table.getString(table.getRowCount()-1, j), 20 + 80 * 7, 100 + 20 * 7);
  }
}

Total();

showTable();

}