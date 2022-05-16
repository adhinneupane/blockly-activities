Blockly.Blocks['copy_row'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Copy Row ")
          .appendField(new Blockly.FieldTextInput("rowNumber"), "row_to_be_copied");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };