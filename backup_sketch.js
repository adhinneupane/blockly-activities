function setup() {
    createCanvas(500, 500);
    textSize(18);
    table = new p5.Table();
    
    
    
    
    
    //define parameters
    number_of_rows = 5;
    number_of_columns = 3;
    user_entry_column1 = "Caterpillars"
    user_entry_column2 = "Leaves"
    
    
    column_names = ["S.No",user_entry_column1,user_entry_column2]
    
    
    number_of_caterpillars_in_each_row = 2
    number_of_leaves_eaten_by_caterpillars=5
    show_sum = true;
    show_enabled = true;
    slideshow = true;
    
    
    
    if (slideshow==true){
    text("click to begin slideshow", 20,20)
    setBtn = createButton("Next Slide")
    setBtn.position(220,05)
    setBtn.mouseClicked(nextSlide)  
    }
    
    
    // add columns in the table 
    for (let i=0; i < number_of_columns; i++){
      table.addColumn(column_names[i]);
    }
    
  
    //call function UserRow
    for(let i =0; i < number_of_rows; i++){
    UserRow()    
    }
    if (show_enabled==true){
        printTable()
    }
  }
  
  // add new values to the Row of table
    function UserRow(){
      let newRow = table.addRow()
      newRow.setString(column_names[0],"")  
      newRow.setString(column_names[1],""+number_of_caterpillars_in_each_row)       
      newRow.setString(column_names[2],""+number_of_leaves_eaten_by_caterpillars)
    }
  
  
  function printTable(mode){
    
    
      //display all columns present in the table 
    for (let c = 0; c < 1; c++) {
      text(table.columns, 20 + 80 * c, 80);
    }
    
    for (let rows = 0; rows < number_of_rows; rows++) {
      for (let columns = 0; columns < 3; columns++) {
        text(table.getString(rows, columns),
             20 + 80 * columns,
             100 + 20 * rows);
      }
    }  
      if (show_sum==true){
          Total()  
    }
  }
  
  function Total(){
      let newRow = table.addRow()
      newRow.setString(column_names[0], "Total")  
      newRow.setString(column_names[1],""+""+number_of_rows*number_of_caterpillars_in_each_row)       
      newRow.setString(column_names[2],""+number_of_leaves_eaten_by_caterpillars*number_of_rows);
  
      for (let rows = 0; rows < number_of_rows+1; rows++) {
      for (let columns = 0; columns < 3; columns++) {
        text(table.getString(rows, columns),
             20 + 80 * columns,
             100 + 20 * rows);
      }
    } 
  }
  
  function nextSlide(){
    clear();
    text("slideshow has started", 20,20)
    printTable()
    
  }
  
  
  