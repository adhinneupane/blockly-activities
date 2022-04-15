function setup() {
    createCanvas(400, 400);
    noLoop();
      textSize(16);
  }
  
  function draw() {
    background(220);
    columnNames = ["SerialNo", " timon ", " pumba "]
    userEntries = ["10","20","30","40","50","60","70","80","90","100","200","300"];
    sumEnabled = true;
    showEnabled = true;
    rowstoCopy = '';
    countCopies = 0;
    tableCreated = true;
    slideShow = false;
    serialNumber = 0;
    pageNumber=0;
    
    
    if (tableCreated != true || showEnabled != true ){
      alert("This program requires the following configurations:\n 1. Show must be enabled. \n 2. Table must be Created. \n 3. A table can have only 2 columns. \n 4. Copied Rows will be added to the end. ")
    }
    else{
     
    // Create table and add the headers 
    table = new p5.Table();
    for(let i=0;i<3;i++) {  
    table.addColumn(columnNames[i]); 
    } 
      
    // insert rows into this table 
    addRow();

    // insert the copied rows into this table
    copyRow(2);
    copyRow(3);
      
    // Show all rows/columns in the table
     if (slideShow==false){
         showTable();  
         } 
  
    if (sumEnabled==true){
        // Add row for sum and Show it 
        Total();
    }
      
         if (slideShow ==true) {
       clear();
       text("Mode: Slide Show",20,20);
       pageCounter = 1;
   setBtn=createButton("Next Page: " + pageCounter);              setBtn.position(220,05);
  setBtn.mouseClicked(NextSlide);
     }
      
      
      
  }
    
  function copyRow(copiedRow){
      countCopies = countCopies + 1;
      print("Count copies is", countCopies);
      serialNumber = serialNumber + 1;
      print("im here");
      var value1 = table.getString(copiedRow,1);
      print ("value1", value1);
      var value2 = table.getString(copiedRow,2);
      print ("value2", value2);
         let newRow=table.addRow();
          k = 0; 
          newRow.setString(columnNames[0],""+serialNumber);
          newRow.setString(columnNames[1],""+value1);
          newRow.setString(columnNames[2],""+value2); 
    }
  
    
  function addRow(){ 
    for(let i=0; i<userEntries.length; i++){ 
      serialNumber = serialNumber + 1;
      let addRow=table.addRow(); 
      addRow.setString(columnNames[0],""+serialNumber);
      addRow.setString(columnNames[1],""+userEntries[i]);
      addRow.setString(columnNames[2],""+userEntries[i+1]);
      i = i+1 ;
        }
  }
    
    
    
    
  function showTable() {
    clear();
    // Show the columns first
    for (let c = 0; c < 1; c++) {
      text(table.columns, 20 + 80 * c, 80);
    }
    // show the rest of the rows
      for (let r = 0; r < userEntries.length/2 + countCopies; r++) {
      for (let c = 0; c < 3; c++) {
        text(table.getString(r, c),
             20 + 80 * c,
             100 + 20 * r);
      }
    }
    

    
  }
  function Total(){
    sumLeft =0 ; sumRight = 0;
    for (let c=0; c< table.getRowCount() ; c++){
    sumLeft += parseInt(table.getString(c,1));
    sumRight += parseInt(table.getString(c,2));
    }
    let totalRow=table.addRow(); 
    totalRow.setString(columnNames[0],"Sum");
    totalRow.setString(columnNames[1],""+sumLeft);
    totalRow.setString(columnNames[2],""+sumRight);
    
    // show this newly added row
    let row=table.getRowCount()-1; 
    for (let columns = 0; columns < 3; columns++){     text(table.getString(row, columns), 20 + 80 * columns, 100 + 20 * row);
          }
    
    
  }
    
    function NextSlide(){
      pageNumber = pageNumber + 1;  
      print("page number is", pageNumber);
      clear();
    // Show the columns first
    for (let c = 0; c < 1; c++) {
      text(table.columns, 20 + 80 * c, 80);
    }

      // show the rest of the rows
      for (let r = 0; r < pageNumber; r++) {
      for (let c = 0; c < 3; c++) {
        text(table.getString(r, c),
             20 + 80 * c,
             100 + 20 * r);
        }
      }
          // Check whether slideshow has ended
        if (pageNumber > userEntries.length/2+countCopies){
          clear();
          alert("You have reached the end of your slideshow");
          text("*******************",20,20);
          text("End of Slide Show!",20,35);
          text("*******************",20,55);
        }
    }
    
  

  }
    

  function setup() { createCanvas(400, 400); noLoop(); textSize(30); } function draw() { background(220); columnNames = ["SerialNo","asd","sd"]; userEntries = [10,300,"2","5"]; sumEnabled = true; showEnabled =  true; rowstoCopy = 0; countCopies = 0; tableCreated=true; slideShow =  false; serialNumber = 0; pageNumber=0; if (tableCreated != true || showEnabled != true ){ alert("This program requires the following configurations: ") } else{ table = new p5.Table(); for(let i=0;i<3;i++) { table.addColumn(columnNames[i]); } addRow(); copyRow(2); copyRow(3); if (slideShow==false){ showTable(); } if (sumEnabled==true){ Total(); } if (slideShow ==true) { clear(); text("Mode: Slide Show",20,20); pageCounter = 1; setBtn=createButton("Next Page"); setBtn.position(1050,200); setBtn.mouseClicked(NextSlide); } } function copyRow(copiedRow){ countCopies = countCopies + 1; print("Count copies is", countCopies); serialNumber = serialNumber + 1; print("im here"); var value1 = table.getString(copiedRow,1); print ("value1", value1); var value2 = table.getString(copiedRow,2); print ("value2", value2); let newRow=table.addRow(); k = 0; newRow.setString(columnNames[0],""+serialNumber); newRow.setString(columnNames[1],""+value1); newRow.setString(columnNames[2],""+value2); } function addRow(){ for(let i=0; i<userEntries.length; i++){ serialNumber = serialNumber + 1; let addRow=table.addRow(); addRow.setString(columnNames[0],""+serialNumber); addRow.setString(columnNames[1],""+userEntries[i]); addRow.setString(columnNames[2],""+userEntries[i+1]); i = i+1 ; } } function showTable() { clear(); if (slideShow==false){ text("Mode: Default (Enable slideShow for effects).",20,20); } for (let c = 0; c < 1; c++) { text(table.columns, 20 + 80 * c, 80); } for (let r = 0; r < userEntries.length/2 + countCopies; r++) { for (let c = 0; c < 3; c++) { text(table.getString(r, c), 20 + 80 * c, 100 + 20 * r); } } } function Total(){ sumLeft =0 ; sumRight = 0; for (let c=0; c< table.getRowCount() ; c++){ sumLeft += parseInt(table.getString(c,1)); sumRight += parseInt(table.getString(c,2)); } let totalRow=table.addRow(); totalRow.setString(columnNames[0],"Sum"); totalRow.setString(columnNames[1],""+sumLeft); totalRow.setString(columnNames[2],""+sumRight); let row=table.getRowCount()-1; for (let columns = 0; columns < 3; columns++){     text(table.getString(row, columns), 20 + 80 * columns, 100 + 20 * row); } } function NextSlide(){ pageNumber = pageNumber + 1; print("page number is", pageNumber); clear(); for (let c = 0; c < 1; c++) { text(table.columns, 20 + 80 * c, 80); } for (let r = 0; r < pageNumber; r++) { for (let c = 0; c < 3; c++) { text(table.getString(r, c), 20 + 80 * c, 100 + 20 * r); } } if (pageNumber > userEntries.length/2+countCopies){ clear(); alert("You have reached the end of your slideshow");text("*******************",40,40); text("End of Slide Show!",40,55); text("*******************",40,70);} } noLoop();}