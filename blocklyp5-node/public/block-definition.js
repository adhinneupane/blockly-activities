// Blocks 
// https://developers.google.com/blockly/guides/create-custom-blocks/blockly-developer-tools#:~:text=Blockly%20Developer%20Tools%20is%20a,configuring%20your%20web%20Blockly%20workspace.

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
    this.setColour(300);
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
    this.setColour(270);
 this.setTooltip(" Set the column Name, value in a table object. \n Type: Object Property \n Example: [Object].input (heightInFeet)(6)");
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
    this.setColour(130);
 this.setTooltip(" Select the rows to be added together in a table object. \n Type: Object Property \n Example: [Object].add_rows (1,2)");
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
    this.setColour(190);
  this.setTooltip(" Select the rows to be copied/repeated in the table. \n Type: Object Property \n Example: [Object].copy_row (1)");
  this.setHelpUrl("");
  }
};


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
 
 Blockly.JavaScript['background'] = function(block) {
   var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
   // TODO: Assemble JavaScript into code variable.
   var code = 'background(' + value_name + ');\n';
   return code;
 };
 Blockly.JavaScript['createcanvas'] = function(block) {
   var value_width = Blockly.JavaScript.valueToCode(block, 'width', Blockly.JavaScript.ORDER_ATOMIC);
   var value_height = Blockly.JavaScript.valueToCode(block, 'height', Blockly.JavaScript.ORDER_ATOMIC);
   var value_canvas = Blockly.JavaScript.valueToCode(block, 'canvas', Blockly.JavaScript.ORDER_ATOMIC);
   // TODO: Assemble JavaScript into code variable.
   var code = 'var myCanvas = createCanvas(' + value_width + ',' + value_height +');\n' + 'myCanvas.parent(' + value_canvas + ');\n';
   return code;
 };
 Blockly.JavaScript['draw'] = function(block) {
   var statements_do = Blockly.JavaScript.statementToCode(block, 'do');
   // TODO: Assemble JavaScript into code variable.
   var code = 'draw = function() {\n' + statements_do + '};\n';
   return code;
 };
 Blockly.JavaScript['ellipse'] = function(block) {
   var value_x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC);
   var value_y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC);
   var value_w = Blockly.JavaScript.valueToCode(block, 'width', Blockly.JavaScript.ORDER_ATOMIC);
   var value_h = Blockly.JavaScript.valueToCode(block, 'height', Blockly.JavaScript.ORDER_ATOMIC);
   // TODO: Assemble JavaScript into code variable.
   var code = 'ellipse(' + value_x + ',' + value_y + ',' + value_w + ',' + value_h + ');\n';
   return code;
 };
 Blockly.JavaScript['fill'] = function(block) {
   var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
   // TODO: Assemble JavaScript into code variable.
   var code = 'fill(' + value_name + ');\n';
   return code;
 };
 Blockly.JavaScript['mousex'] = function(block) {
   // TODO: Assemble JavaScript into code variable.
   var code = 'mouseX';
   // TODO: Change ORDER_NONE to the correct strength.
   return [code];
 };
 Blockly.JavaScript['mousey'] = function(block) {
   // TODO: Assemble JavaScript into code variable.
   var code = 'mouseY';
   // TODO: Change ORDER_NONE to the correct strength.
   return [code];
 };
 
 Blockly.JavaScript['rect'] = function(block) {
   var value_x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC);
   var value_y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC);
   var value_w = Blockly.JavaScript.valueToCode(block, 'width', Blockly.JavaScript.ORDER_ATOMIC);
   var value_h = Blockly.JavaScript.valueToCode(block, 'height', Blockly.JavaScript.ORDER_ATOMIC);
   // TODO: Assemble JavaScript into code variable.
   var code = 'rect(' + value_x + ',' + value_y + ',' + value_w + ',' + value_h + ');\n';
   return code;
 };
 
 Blockly.JavaScript['setup'] = function(block) {
   var statements_do = Blockly.JavaScript.statementToCode(block, 'do');
   // TODO: Assemble JavaScript into code variable.
   var code = 'setup = function() {\n' + statements_do + '};\n';
   return code;
 };
 
 Blockly.JavaScript['input_header'] = function(block) {
   var tableHeader = block.getFieldValue('col1');
   var valueOfHeader = block.getFieldValue('col2');
   tableHeader = ' ' + tableHeader + ' ';
   valueOfHeader = ' ' + valueOfHeader + ' ';
   executable.columnNames[counters.headerCount] = tableHeader;
   counters.headerCount = counters.headerCount + 1; 
   executable.userEntries[counters.entryCount] = valueOfHeader;
   counters.entryCount = counters.entryCount + 1;
   for (let i = 0 ; i < executable.columnNames.length; i ++){ 
    if (executable.columnNames[i]==executable.columnNames[i+1]){
      document.getElementById('canvasHelp').innerText = "A table cannot have two columns with the same name"; 
     }
   }
   return ""
 };
 
 Blockly.JavaScript['total_row'] = function(block) {
   var rowsAdd = block.getFieldValue('rows_to_be_added');
   console.log("rowsAdd",rowsAdd)
   var numberofCopies = (rowsAdd.split(",").length-1);
   console.log("number of added rows", numberofCopies)
   for (let i = 0 ; i <= numberofCopies; i ++){
     executable.rowsToAdd[i] = "1";
   }
   console.log("rows to be added are:",executable.rowsToAdd)
   executable.sumEnabled = true;
   return ""
  };
 
 Blockly.JavaScript['copy_row'] = function(block) {
   var number_copy = block.getFieldValue('row_to_be_copied');
   // row count starts from 0 in p5
   counters.copyCounter = counters.copyCounter + 1; 
   if (number_copy>counters.copyCounter){
     document.getElementById('canvasHelp').innerText = "Table does not have row number: " +number_copy+  " so it cannot be copied";
     document.getElementById('canvasHelp').setColour = "red";
   }
   return ""
 };
  
 Blockly.JavaScript['show'] = function(block) {
   var checkShow = block.getFieldValue('NAME');
   // TODO: Assemble JavaScript into code variable.
   executable.showEnabled = true ;
   return ""
 }
 
 Blockly.JavaScript['create_table'] = function(block) {
   executable.tableCreated =  true;
   return ""
  };
 