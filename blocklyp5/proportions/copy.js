Blockly.Blocks['copy_row'] = {

    init: function() {
	this.appendDummyInput()
            .appendField("copy row")
            .appendField(new Blockly.FieldTextInput("number"),
			 "row_to_be_copied");
	this.setInputsInline(true);
	this.setPreviousStatement(true, null);
	this.setNextStatement(true, null);
	this.setColour(190);
	this.setTooltip(" Select the row that will be copied after the last row.");
	this.setHelpUrl("");
    }
};

Blockly.JavaScript['copy_row'] = function(block) {
    let number = block.getFieldValue('row_to_be_copied');

    return `copy_row(${number});`
};
