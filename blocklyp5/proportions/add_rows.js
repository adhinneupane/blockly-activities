

Blockly.Blocks['add_rows'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("add the last")
            .appendField(new Blockly.FieldTextInput("number"), "rows_to_be_added")
	    .appendField("rows together");
	this.setInputsInline(true);
	this.setPreviousStatement(true, null);
	this.setNextStatement(true, null);
	this.setColour(130);
	this.setTooltip(" Select how many rows will be added together.");
	this.setHelpUrl("");
    }
};

Blockly.JavaScript['add_rows'] = function(block) {
    let number = block.getFieldValue('rows_to_be_added')
    
    return `add_rows(${number});`
};
  
