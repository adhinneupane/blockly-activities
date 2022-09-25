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
   this.setTooltip("Add a column with the given name to the table, and use the given value as the initial value for this column.");
   this.setHelpUrl("");
    }
};

Blockly.JavaScript['input_header'] = function(block) {
    let columnName = block.getFieldValue('column')
    let value = block.getFieldValue('value')

    return `column("${columnName}",${value});`
};
