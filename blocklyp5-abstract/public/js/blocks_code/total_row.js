Blockly.Blocks['sum'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Sum")
          .appendField(new Blockly.FieldTextInput("rows to add"), "rows_to_be_added");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };