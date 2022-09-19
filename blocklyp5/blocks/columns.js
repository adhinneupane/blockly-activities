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
    let columnName = block.getFieldValue('col1')
    let value = block.getFieldValue('col2')
    return input_header(columnName,value)
};

function input_header(columnName,value){
  return 'table.addColumn("' + columnName +'"); table.addRow().set("' + columnName + '" , ' + value + ');';
}

