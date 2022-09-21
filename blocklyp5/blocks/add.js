
Blockly.Blocks['add_row'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("add row")
            .appendField(new Blockly.FieldTextInput("number"), "row_to_be_added")
	    .appendField("to the last row");
	this.setInputsInline(true);
	this.setPreviousStatement(true, null);
	this.setNextStatement(true, null);
	this.setColour(130);
	this.setTooltip(" Select the row that will be added to the last row in the table.");
	this.setHelpUrl("");
    }
};

Blockly.JavaScript['add_row'] = function(block) {
    let number = block.getFieldValue('row_to_be_added')
    
    return `add_row(${number});`
};
  
