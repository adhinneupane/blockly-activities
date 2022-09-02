
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
    var rowsAdd = block.getFieldValue('rows_to_be_added');
    console.log("rowsAdd",rowsAdd)
    var numberofCopies = (rowsAdd.split(",").length-1);
    console.log("number of added rows", numberofCopies)
    for (let i = 0 ; i <= numberofCopies; i ++){
      executable.rowsToAdd[i] = "1";
    }
    console.log("rows to be added are:",executable.rowsToAdd)
    executable.sumEnabled = true;
    return ""
};
  