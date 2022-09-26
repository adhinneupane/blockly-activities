Blockly.Blocks['show_table'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("show the table");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setColour(260);
      this.setTooltip("Show the table.");
   this.setHelpUrl("");
    }
};

Blockly.JavaScript['show_table'] = function(block) {
  //  var code = show();
   code = 'showTable(sketch,450,450);';
   return code;
}

// export function show(){
//     let gap = 0; 
//     for (let i =0; i<= table.columns.length-1; i++){
//       sketch.text(table.columns[i], 20 + gap ,20);
//       sketch.text(table.get(i,i), 25 + gap, 40 );
//       gap = gap + 100; 
//     }
// }




