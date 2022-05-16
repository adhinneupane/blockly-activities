Blockly.Blocks['create_table'] = {
    init: function() {
      this.appendStatementInput("NAME")
          .setCheck(null)
          .appendField("Table");
      this.setNextStatement(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };