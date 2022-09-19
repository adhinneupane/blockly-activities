Blockly.Blocks['show'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(".show");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setColour(260);
      this.setTooltip(" Displays output on the screen. \n Type: Object Property \n Example: [Object].show");
   this.setHelpUrl("");
    }
};

Blockly.JavaScript['show'] = function(block) {
   var code = show();
   return code;
   console.log("code from show is", code);
}

function show(){
    let gap = 0; 
    for (let i =0; i<= table.columns.length-1; i++){
      sketch.text(table.columns[i], 20 + gap ,20);
      sketch.text(table.get(i,i), 25 + gap, 40 );
      gap = gap + 100; 
    }
}




