Blockly.Blocks['show'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("show");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };