Blockly.Blocks['create_table']={
    init: function(){
    this.appendDummyInput()
      .appendField("Table");
    this.setInputsInline(false);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip(" Define an object of type table. \n Type: Object \n Example: Table");
    this.setHelpUrl("");
    }
}

Blockly.JavaScript['create_table'] = function(block) {
    executable.tableCreated =  true;
    return ""
   };