
Blockly.Blocks['div_row'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("divide the last row by")
          .appendField(new Blockly.FieldTextInput("value"), "divisor");
	this.setInputsInline(true);
	this.setPreviousStatement(true, null);
	this.setNextStatement(true, null);
	this.setColour(130);
	this.setTooltip(" Select the value to divide the last row by.");
	this.setHelpUrl("");
    }
};

Blockly.JavaScript['div_row'] = function(block) {
    let number = block.getFieldValue('divisor')
    
    return `div_row(${number});`
};
  
