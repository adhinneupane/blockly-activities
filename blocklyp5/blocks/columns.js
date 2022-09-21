Blockly.Blocks['input_header'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("make column")
            .appendField(new Blockly.FieldTextInput("name"), "column")
	    .appendField("with")
          .appendField(new Blockly.FieldTextInput("value"), "value");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(270);
   this.setTooltip(" Set the column Name, value in a table object. \n Type: Object Property \n Example: [Object].input (heightInFeet)(6)");
   this.setHelpUrl("");
    }
};

Blockly.JavaScript['input_header'] = function(block) {
    let columnName = block.getFieldValue('column')
    let value = block.getFieldValue('value')

    return `column("${columnName}",${value});`
};
