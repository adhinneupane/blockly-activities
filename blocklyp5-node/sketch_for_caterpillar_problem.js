function setup(){ createCanvas(500, 500); noLoop(); }
 
function draw(){
     clear(); textSize(20); table=new p5.Table(); slideCounter=-1; number_of_rows=0;number_of_columns=3; user_entry_column1="caterpillar"; checkTrue="TRUE"; user_entry_column2="leaf";column_names=["RowNo",user_entry_column1,user_entry_column2]; user_entries=["2","3","4","5"]; show_sum="TRUE"; show_enabled="TRUE"; slideshow=false; serialnumber=-2; copy_row_counter=1;
  
     if(slideshow==true){
          text("click to begin slideshow",20,20); setBtn=createButton("Next Slide"); setBtn.position(220,05); setBtn.mouseClicked(nextSlide); 
        }
        
        for(let i=0;i<number_of_columns;i++) { table.addColumn(column_names[i]); } for(let i=0;i<user_entries.length/2;i++){ serialnumber=serialnumber+1; } if(show_enabled.localeCompare(checkTrue)>-1 ) { printTable(); } addRow();CopyRow(1);CopyRow(1);  } 
     
     
     function CopyRow(row_to_be_copied)
{ copy_row_counter= copy_row_counter + 1; print(copy_row_counter); RepeatBuffer=[]; serialnumber = serialnumber + 1; let i =0; for(let columns=0; columns<3;columns++) { RepeatBuffer[i]= table.getString(row_to_be_copied-1,columns),20+80*columns,100+20*row_to_be_copied-1; console.log("CONTNET",RepeatBuffer[i]); i = i + 1; } let newRow=table.addRow(); k = 0; newRow.setString(column_names[0],""+serialnumber); newRow.setString(column_names[1],""+RepeatBuffer[k+1]); newRow.setString(column_names[2],""+RepeatBuffer[k+2]); }  
     
     function printTable(slideCounter) {
       for(let c=0;c<1;c++){ text(table.columns,20 + 80*c,80) } 
                                        
                                        if (slideshow==false){
                                      
                                          for(let rows=0; rows<user_entries.length/2 + copy_row_counter; rows++){ for(let columns=0; columns<3;columns++) {
 addRow();                                           text(table.getString(rows,columns),20+80*columns,100+20*rows);
} }
                                                                                                                
                                                        if(show_sum.localeCompare(checkTrue) > -1) { Total(); } }
                                        
                                        
if (slideshow==true){ 
  slideCounter = slideCounter + 1; clear();for(let c=0;c<1;c++){ text(table.columns,20 + 80*c,80); } for(let rows=0; rows<slideCounter; rows++){ for(let columns=0; columns<3;columns++) { text(table.getString(rows,columns),20+80*columns,100+20*rows); } } if (slideCounter == user_entries.length/2){ Total(); } if (slideCounter > user_entries.length/2){ console.log("user to be notifide"); } } }


     
     
     function Total(){ let newRow = table.addRow(); newRow.setString(column_names[0], "Total"); newRow.setString(column_names[1],""+""+2*2); newRow.setString(column_names[2],""+2*2); let rows=number_of_rows; for (let columns = 0; columns < 3; columns++) { text(table.getString(rows, columns), 20 + 80 * columns, 100 + 20 * rows); } }
     
     
     function nextSlide(){ text("Mode: Slideshow", 20,20); slideCounter = slideCounter + 1; printTable(slideCounter); console.log("Slide count is:", slideCounter); setBtn=createButton("Next Slide"); setBtn.position(220,05); setBtn.mouseClicked(nextSlide); alert_end_of_slide = number_of_rows + user_entries.length/2 + 1; if (slideCounter>alert_end_of_slide){ alert("End of slide show"); } } 
     
     
     function addRow(){ for(let i=0; i<user_entries.length; i++){ serialnumber = serialnumber + 1; let addRow=table.addRow(); addRow.setString(column_names[0],""+serialnumber); addRow.setString(column_names[1],""+user_entries[i]); addRow.setString(column_names[2],""+user_entries[i+1]); i = i + 1; }noLoop() }