function setup() {
    createCanvas(500, 500);
    textSize(18);
    table = new p5.Table();
    
    //define parameters
    number_of_rows = 5;
    number_of_columns = 3;
    column_names = ["SerialNo","Caterpillars","Leaves"]
    left_row = 2
    right_row=5
    show_sum = true;
    show_enabled = true;
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
      newRow.setString(column_names[1],""+left_row)       
      newRow.setString(column_names[2],""+right_row)
    }
  
  
  function printTable(){
    
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
      newRow.setString(column_names[1],""+""+number_of_rows*left_row)       
      newRow.setString(column_names[2],""+right_row*number_of_rows);
  
      for (let rows = 0; rows < number_of_rows+1; rows++) {
      for (let columns = 0; columns < 3; columns++) {
        text(table.getString(rows, columns),
             20 + 80 * columns,
             100 + 20 * rows);
      }
    } 
  }
  