
Blockly.Blocks['total_row'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(".add_rows")
          .appendField(new Blockly.FieldTextInput("rows to add"), "rows_to_be_added");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(130);
   this.setTooltip(" Select the rows to be added together in a table object. \n Type: Object Property \n Example: [Object].add_rows (1,2)");
   this.setHelpUrl("");
    }
};

Blockly.JavaScript['total_row'] = function(block) {
    return ""
};
  