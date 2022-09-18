Blockly.Blocks['input_header'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(".input")
          .appendField(new Blockly.FieldTextInput("columnName"), "col1")
          .appendField(new Blockly.FieldTextInput("value"), "col2");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(270);
   this.setTooltip(" Set the column Name, value in a table object. \n Type: Object Property \n Example: [Object].input (heightInFeet)(6)");
   this.setHelpUrl("");
    }
};

Blockly.JavaScript['input_header'] = function(block) {
    var tableHeader = block.getFieldValue('col1');
    var valueOfHeader = block.getFieldValue('col2');
    tableHeader = ' ' + tableHeader + ' ';
    valueOfHeader = ' ' + valueOfHeader + ' ';
    executable.columnNames[counters.headerCount] = tableHeader;
    counters.headerCount = counters.headerCount + 1; 
    executable.userEntries[counters.entryCount] = valueOfHeader;
    counters.entryCount = counters.entryCount + 1;
    for (let i = 0 ; i < executable.columnNames.length; i ++){ 
     if (executable.columnNames[i]==executable.columnNames[i+1]){
       document.getElementById('canvasHelp').innerText = "A table cannot have two columns with the same name"; 
      }
    }
    return ""
};

