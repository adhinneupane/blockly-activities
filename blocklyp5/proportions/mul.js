
Blockly.Blocks['mul_row'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("multiply the last row by")
          .appendField(new Blockly.FieldTextInput("value"), "multiplier");
	this.setInputsInline(true);
	this.setPreviousStatement(true, null);
	this.setNextStatement(true, null);
	this.setColour(130);
	this.setTooltip(" Select the value to multiply the last row by.");
	this.setHelpUrl("");
    }
};

Blockly.JavaScript['mul_row'] = function(block) {
    let number = block.getFieldValue('multiplier')
    
    return `mul_row(${number});`
};
  
