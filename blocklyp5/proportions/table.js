Blockly.Blocks['create_table'] = {
    init: function() {
	this.appendDummyInput()
	    .appendField("Make a table");
	this.setInputsInline(false);
	this.setNextStatement(true, null);
	this.setColour(230);
	this.setTooltip("Create an empty table");
	this.setHelpUrl("");
    }
}

Blockly.JavaScript['create_table'] = function(block) {
    code = 'createTable();';
    return code; 
};




