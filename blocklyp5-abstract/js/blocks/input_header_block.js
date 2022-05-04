Blockly.Blocks['input_header'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Input")
          .appendField(new Blockly.FieldTextInput("column Name"), "col1")
          .appendField(new Blockly.FieldTextInput("value"), "col2");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };