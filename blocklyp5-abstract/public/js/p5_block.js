Blockly.Blocks['background'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("background");
    this.appendValueInput("NAME")
        .setCheck("Number")
        .appendField("color");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};Blockly.Blocks['createcanvas'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("createCanvas");
    this.appendValueInput("width")
        .setCheck("Number")
        .appendField("width");
    this.appendValueInput("height")
        .setCheck("Number")
        .appendField("height");
    this.appendValueInput("canvas")
        .setCheck("String")
        .appendField("canvas");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};Blockly.Blocks['draw'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("draw");
    this.appendStatementInput("do")
        .setCheck(null)
        .appendField("do");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};Blockly.Blocks['ellipse'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("ellipse");
    this.appendValueInput("x")
        .setCheck("Number")
        .appendField("x");
    this.appendValueInput("y")
        .setCheck("Number")
        .appendField("y");
    this.appendValueInput("width")
        .setCheck("Number")
        .appendField("w");
    this.appendValueInput("height")
        .setCheck("Number")
        .appendField("h");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(165);
    this.setTooltip('Draws an ellipse to the screen. ');
    this.setHelpUrl('https://p5js.org/reference/#/p5/ellipse');
  }
};Blockly.Blocks['fill'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("fill");
    this.appendValueInput("NAME")
        .setCheck("Number")
        .appendField("color");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};Blockly.Blocks['mousex'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("mouseX");
    this.setOutput(true, null);
    this.setColour(290);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};
Blockly.Blocks['mousey'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("mouseY");
    this.setOutput(true, "Number");
    this.setColour(290);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};
Blockly.Blocks['rect'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("rect");
    this.appendValueInput("x")
        .setCheck("Number")
        .appendField("x");
    this.appendValueInput("y")
        .setCheck("Number")
        .appendField("y");
    this.appendValueInput("width")
        .setCheck("Number")
        .appendField("w");
    this.appendValueInput("height")
        .setCheck("Number")
        .appendField("h");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(165);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};
Blockly.Blocks['setup'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("setup");
    this.appendStatementInput("do")
        .setCheck(null)
        .appendField("do");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('The setup() function is called once when the program starts.');
    this.setHelpUrl('https://p5js.org/reference/#/p5/setup');
  }
};
Blockly.Blocks['input_header'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(".input")
        .appendField(new Blockly.FieldTextInput("columnName"), "col1")
        .appendField(new Blockly.FieldTextInput("value"), "col2");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['total_row'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(".add_rows")
        .appendField(new Blockly.FieldTextInput("rows to add"), "rows_to_be_added");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['copy_row'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(".copy_row ")
        .appendField(new Blockly.FieldTextInput("rowNumber"), "row_to_be_copied");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['show'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(".show");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


Blockly.Blocks['create_table']={
  init: function(){
  this.appendDummyInput()
    .appendField("Table");
  this.setInputsInline(false);
  this.setNextStatement(true, null);
  this.setColour(230);
  this.setTooltip("");
  this.setHelpUrl("");
}
}

