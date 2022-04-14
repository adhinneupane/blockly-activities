function setup() {
    createCanvas(400, 400);
    noLoop();
      textSize(16);
  }
  
  function draw() {
    background(220);
    columnNames = ["SerialNo","timon","pumba"]
    userEntries = ["10","20","30","40","50","60","70","80"];
    sumEnabled = true;
    showEnabled = true;
    tableCreated = true;
    slideShow = true;
    serialNumber = 0;
    
    
    if (tableCreated != true || showEnabled != true ){
      alert("This program requires the following configurations")
    }
    else{
    
      if (slideShow ==true) {
       text("Mode: Slide Show",20,20);
       pageCounter = 1;
   setBtn=createButton("Next Page: " + pageCounter);              setBtn.position(220,05);
  setBtn.mouseClicked(NextSlide);
     }
      
      if (slideShow != true){
        text("Mode: Default", 20,20);
      } 
      
    // Create table and add the headers 
    table = new p5.Table();
    for(let i=0;i<3;i++) {  
    table.addColumn(columnNames[i]); 
    } 
      
    // insert rows into this table 
    addRow();
      
    // Show all rows/columns in the table
    showTable();  
  
    if (sumEnabled==true){
        // Add row for sum and Show it 
        Total();
    }
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
      for (let r = 0; r < userEntries.length/2; r++) {
      for (let c = 0; c < 3; c++) {
        text(table.getString(r, c),
             20 + 80 * c,
             100 + 20 * r);
      }
    }
  }
  function Total(){
    sumLeft =0 ; sumRight = 0;
    for (let c=0; c< table.getRowCount(); c++){
    sumLeft += parseInt(table.getString(c,1));
    sumRight += parseInt(table.getString(c,2));
    }
    let totalRow=table.addRow(); 
    totalRow.setString(columnNames[0],"Sum");
    totalRow.setString(columnNames[1],""+sumLeft);
    totalRow.setString(columnNames[2],""+sumRight);
    
    // show this newly added row
    let row=table.getRowCount()-1; 
    for (let columns = 0; columns < 3; columns++){   text(table.getString(row, columns), 20 + 80 * columns, 100 + 20 * row);
          }
    
    
  }
    
    function NextSlide(){
    
    }
  }
    
    
  
  