// template code for runnng tests in p5 editor for lesson 1

function setup(){
    createCanvas(500, 500);
    noLoop(); 
} 
  
function draw(){
    clear();
    textSize(20); 
    table=new p5.Table(); 
    slideCounter=-1;
    number_of_columns=3;
    user_entry_column1="caterpillar";
    checkTrue="TRUE";
    user_entry_column2="leaves";
    column_names=["RowNo",user_entry_column1,user_entry_column2];
    user_entries= ["2","5"];
    rowvalue1=2;
    rowvalue2=5; 
    show_sum="TRUE";
    show_enabled="TRUE";
    slideshow=false;
    serialnumber=0;  
    copy_row_counter=0;
    
  if(slideshow==true){
      text("click to begin slideshow",20,20); 
      setBtn=createButton("Next Slide"); 
      setBtn.position(220,5); 
      setBtn.mouseClicked(nextSlide);
  }
    


  for(let i=0;i<number_of_columns;i++) {
       table.addColumn(column_names[i]); 
    }

  for(let i=0;i<user_entries.count/2;i++){
       serialnumber=serialnumber+1;
       UserRow(); 
    }
    addRow();
    CopyRow("1"); 
  
  
    if (slideshow==false){
        printTable();
      }
}
  
function CopyRow(row_to_be_copied){
    copy_row_counter = copy_row_counter + 1;
    RepeatBuffer=[];  
    serialnumber = serialnumber + 1;
    let i =0;
    for(let columns=0; columns<3;columns++) {  
        RepeatBuffer[i]=table.getString(row_to_be_copied-1,columns),20+80*columns,100+20*row_to_be_copied-1;
        console.log("CONTNET",RepeatBuffer[i]);
        i = i + 1;
    }
    let newRow=table.addRow();
    k = 0;
    newRow.setString(column_names[0],""+serialnumber);  
    newRow.setString(column_names[1],""+RepeatBuffer[k+1]);
    newRow.setString(column_names[2],""+RepeatBuffer[k+2]);  
}


  
function UserRow(){ 
    let newRow=table.addRow();
    newRow.setString(column_names[0],"");
    newRow.setString(column_names[0],""+serialnumber)  
    newRow.setString(column_names[1],""+rowvalue1); 
    newRow.setString(column_names[2],""+rowvalue2); 
} 
  
function printTable(slideCounter) {    
   for(let c=0;c<1;c++){
        text(table.columns,20 + 80*c,80); 
    }
   if (slideshow==false){
       clear();
       console.log("value slide counter");
       for(let c=0;c<1;c++){
        text(table.columns,20 + 80*c,80); 
        }
        for(let rows=0; rows<user_entries.length/2+copy_row_counter; rows++){ 
            for(let columns=0; columns<3;columns++) { 
                text(table.getString(rows,columns),20+80*columns,100+20*rows); 
            }
        }
        if (show_sum.localeCompare(checkTrue) > -1){
            Total();
         }
        // print columns in anycase 
    }
   if (slideshow==true){
        slideCounter = slideCounter + 1;
        // print one row at a time
        clear();
        // print columns in anycase 
        for(let c=0;c<1;c++){
            text(table.columns,20 + 80*c,80); 
        }
        for(let rows=0; rows<slideCounter; rows++){ 
            for(let columns=0; columns<3;columns++) { 
                text(table.getString(rows,columns),20+80*columns,100+20*rows); 
            }
        }
     
        if (slideCounter == user_entries.length/2 && show_sum.localeCompare(checkTrue) > -1){
            Total();
         }
        if (slideCounter > user_entries.length/2 + 1){
            console.log("user to be notifide");
        }
    }
}
  
  
  function Total(){ 
    
    let newRow = table.addRow();
    newRow.setString(column_names[0], "Total");
    newRow.setString(column_names[1],""+""+(user_entries.length/2)*rowvalue1);
    newRow.setString(column_names[2],""+rowvalue2*(user_entries.length/2));
    
    if (slideshow==true){
        let rows=(user_entries.length/2); 
        for (let columns = 0; columns < 3; columns++) { 
            text(table.getString(rows, columns), 20 + 80 * columns, 100 + 20 * rows); 
        } 
    }
    if (slideshow==false){
        let rows=(user_entries.length/2+copy_row_counter); 
        console.log("rows",rows);
        for (let columns = 0; columns < 3; columns++) { 
            text(table.getString(rows, columns), 20 + 80 * columns, 100 + 20 * rows); 
        } 
    }

}
     
  function nextSlide(){
    text("Mode: Slideshow", 20,20); 
    slideCounter = slideCounter + 1;
    printTable(slideCounter);
    console.log("Slide count is:", slideCounter);
    setBtn=createButton("Next Slide"); 
    setBtn.position(220,5); 
    setBtn.mouseClicked(nextSlide);
    alert_end_of_slide = user_entries.length/2 + copy_row_counter +1;
    if (slideCounter>alert_end_of_slide){
      alert("End of slide show");
    }
  }
  
  function addRow(){
  for(let i=0; i<user_entries.length; i++){
  serialnumber = serialnumber + 1;
  let addRow=table.addRow();
  addRow.setString(column_names[0],""+serialnumber);  
  addRow.setString(column_names[1],""+user_entries[i]); addRow.setString(column_names[2],""+user_entries[i+1]);
  i = i + 1; 
  }  
  }

//  function setup() { createCanvas(400, 400); noLoop(); textSize(20); } function draw() { background(220); columnNames = ["serialno","b","c"]; userEntries = [2,5,6,7]; sumEnabled = true; showEnabled =  true; rowstoCopy = 0; countCopies = 0; tableCreated=true; slideShow =  true; serialNumber = 0; pageNumber=0; if (tableCreated != true || showEnabled != true ){ alert("This program requires the following configurations:\n 1. Show must be enabled. \n 2. Table must be Created. \n 3. A table can have only 2 columns. \n 4. Copied Rows will be added to the end.") } else{ table = new p5.Table(); for(let i=0;i<3;i++) { table.addColumn(columnNames[i]); } addRow(); copyRow(0);if (slideShow==false){ showTable(); } if (sumEnabled==true){ Total(); } if (slideShow ==true) { clear(); text("Mode: Slide Show",20,20); pageCounter = 1; setBtn=createButton("Next Page"); setBtn.position(1050,200); setBtn.mouseClicked(NextSlide); } } function copyRow(copiedRow){ countCopies = countCopies + 1; print("Count copies is", countCopies); serialNumber = serialNumber + 1; print("im here"); var value1 = table.getString(copiedRow,1); print ("value1", value1); var value2 = table.getString(copiedRow,2); print ("value2", value2); let newRow=table.addRow(); k = 0; newRow.setString(columnNames[0],""+serialNumber); newRow.setString(columnNames[1],""+value1); newRow.setString(columnNames[2],""+value2); } function addRow(){ for(let i=0; i<userEntries.length; i++){ serialNumber = serialNumber + 1; let addRow=table.addRow(); addRow.setString(columnNames[0],""+serialNumber); addRow.setString(columnNames[1],""+userEntries[i]); addRow.setString(columnNames[2],""+userEntries[i+1]); i = i+1 ; } } function showTable() { clear(); if (slideShow==false){ text("Mode: Default (Enable slideShow for effects).",20,20); } for (let c = 0; c < 1; c++) { text(table.columns, 20 + 80 * c, 80); } for (let r = 0; r < userEntries.length/2 + countCopies; r++) { for (let c = 0; c < 3; c++) { text(table.getString(r, c), 20 + 80 * c, 100 + 20 * r); } } } function Total(){ sumLeft =0 ; sumRight = 0; for (let c=0; c< table.getRowCount() ; c++){ sumLeft += parseInt(table.getString(c,1)); sumRight += parseInt(table.getString(c,2)); } let totalRow=table.addRow(); totalRow.setString(columnNames[0],"Sum"); totalRow.setString(columnNames[1],""+sumLeft); totalRow.setString(columnNames[2],""+sumRight); let row=table.getRowCount()-1; for (let columns = 0; columns < 3; columns++){ text(table.getString(row, columns), 20 + 80 * columns, 100 + 20 * row); } } function NextSlide(){ pageNumber = pageNumber + 1; print("page number is", pageNumber); clear(); for (let c = 0; c < 1; c++) { text(table.columns, 20 + 80 * c, 80); } for (let r = 0; r < pageNumber; r++) { for (let c = 0; c < 3; c++) { text(table.getString(r, c), 20 + 80 * c, 100 + 20 * r); } } if (pageNumber > userEntries.length/2+countCopies) { clear(); alert("You have reached the end of your slideshow");text("*******************",40,40); text("End of Slide Show!",40,55); text("*******************",40,75);} } noLoop();}