
Blockly.Blocks['show'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(".show");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setColour(260);
      this.setTooltip(" Displays output on the screen. \n Type: Object Property \n Example: [Object].show");
   this.setHelpUrl("");
    }
};

Blockly.JavaScript['show'] = function(block) {
    var checkShow = block.getFieldValue('NAME');
    // TODO: Assemble JavaScript into code variable.
    executable.showEnabled = true ;
    return ""
}
  