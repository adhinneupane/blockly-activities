Blockly.Blocks['show'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("show");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };