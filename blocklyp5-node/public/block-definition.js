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
    this.setColour(130);
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
    this.setColour(190);
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
    this.setColour(260);
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
   tableHeader = '"' + tableHeader + '"';
   valueOfHeader = '"' + valueOfHeader + '"';
   executable.columnNames[counters.headerCount] = tableHeader;
   counters.headerCount = counters.headerCount + 1; 
   executable.userEntries[counters.entryCount] = valueOfHeader;
   counters.entryCount = counters.entryCount + 1;
   return ""
 };
 
 Blockly.JavaScript['total_row'] = function(block) {
   var rowsAdd = block.getFieldValue('row_to_be_added');
   executable.rowsToAdd[counters.addedCount] = rowsAdd;
   executable.sumEnabled = true;
   return ""
 };
 
 Blockly.JavaScript['copy_row'] = function(block) {
   var number_copy = block.getFieldValue('row_to_be_copied');
   // row count starts from 0 in p5
   var repeat_code = '';
   repeat_code += 'copyRow(' + number_copy +');';
   executable.rowstoCopy += repeat_code;
   return ""
 };
  
 Blockly.JavaScript['show'] = function(block) {
   var checkShow = block.getFieldValue('NAME');
   // TODO: Assemble JavaScript into code variable.
   executable.showEnabled = true ;
     return 'setup = function() { myCanvas = createCanvas(600, 600);textSize(20);  myCanvas.parent(' + "'myContainer'" + ');noLoop();  }; draw = function() { copyValues = []; rowCount = 0; rowsToAdd = ["1","2"]; slideCounter = 0; background(225, 225, 225); columnNames = ["SerialNo","Caterpillar","Leaves","new"]; userEntries = ["3","4","5"]; sumEnabled = true; showEnabled = true; rowstoCopy = 0; countCopies = 0; tableCreated = true; slideShow = true; serialNumber = 0; pageNumber = 0; table = new p5.Table(); for (let i = 0; i < columnNames.length; i++) { table.addColumn(columnNames[i]); } setBtn = createButton("Next Page"); print("counterss");setBtn.position(220, 70); setBtn.mouseClicked(NextSlide); let addRow = table.addRow(); rowCount = rowCount + 1; serialNumber = 1; addRow.setString(columnNames[0], "" + 1); j = 0; for (let i = 1; i < columnNames.length; i++) { addRow.setString(columnNames[i], "" + userEntries[j]); j = j + 1; } function copyRow(copiedRow) { countCopies = countCopies + 1; serialNumber = serialNumber + 1; for (let i = 1; i < table.getColumnCount(); i++) { copyValues[i] = table.getString(copiedRow, i); } let newRow = table.addRow(); newRow.setString(columnNames[0], "" + serialNumber); for (let i = 1; i < table.getColumnCount(); i++) { newRow.setString(columnNames[i], "" + copyValues[i]); } } copyRow(0); copyRow(0); function showTable() { clear(); if (slideShow == false) { text("Mode: Default (Enable slideShow for effects).", 20, 20); } for (let c = 0; c < 1; c++) { text(table.columns, 20 + 80 * c, 80); } for (let r = 0; r < rowCount + countCopies + totalCount; r++) { for (let c = 0; c < columnNames.length; c++) { text(table.getString(r, c), 20 + 80 * c, 100 + 20 * r); } } } function Total() { placeholder = 0; let totalRow = table.addRow(); totalRow.setString(columnNames[0], "Sum"); for (let i = 1; i < table.getColumnCount(); i++) { placeholder = parseInt(table.getString(0, columnNames[i])); if (rowsToAdd.length == 0) { rowsToAdd.length = 1; } totalRow.setString(columnNames[i], placeholder * rowsToAdd.length); } } if (true == true) { Total(); } function NextSlide() { clear(); slideCounter = slideCounter + 1; print("click", slideCounter); for (let c = 0; c < 1; c++) { text(table.columns, 20 + 80 * c, 80); } for (let r = 0; r < slideCounter; r++) { if (slideCounter == table.getRowCount() + 1) { clear(); for (let c = 0; c < 1; c++) { text(table.columns, 20 + 80 * c, 80); } slideCounter = 1; } for (let c = 0; c < columnNames.length; c++) { text(table.getString(r, c), 20 + 80 * c, 100 + 20 * r); } } } noLoop();}'
 }
 
 Blockly.JavaScript['create_table'] = function(block) {
   executable.tableCreated =  true;
   return 'setup = function() { myCanvas = createCanvas(600, 600);textSize(20); myCanvas.parent(' + "'myContainer'" + '); noLoop();  }; draw = function() { copyValues = []; rowCount = 0; rowsToAdd = ["1","2"]; slideCounter = 0; background(225, 225, 225); columnNames = ["SerialNo","Caterpillar","Leaves","Exssstra"]; userEntries = ["3","4","5"]; sumEnabled = true; showEnabled = true; rowstoCopy = 0; countCopies = 0; tableCreated = true; slideShow = true; serialNumber = 0; pageNumber = 0; table = new p5.Table(); for (let i = 0; i < columnNames.length; i++) { table.addColumn(columnNames[i]); } setBtn = createButton("Next Page"); print("counter");setBtn.position(220, 70); setBtn.mouseClicked(NextSlide); let addRow = table.addRow(); rowCount = rowCount + 1; serialNumber = 1; addRow.setString(columnNames[0], "" + 1); j = 0; for (let i = 1; i < columnNames.length; i++) { addRow.setString(columnNames[i], "" + userEntries[j]); j = j + 1; } function copyRow(copiedRow) { countCopies = countCopies + 1; serialNumber = serialNumber + 1; for (let i = 1; i < table.getColumnCount(); i++) { copyValues[i] = table.getString(copiedRow, i); } let newRow = table.addRow(); newRow.setString(columnNames[0], "" + serialNumber); for (let i = 1; i < table.getColumnCount(); i++) { newRow.setString(columnNames[i], "" + copyValues[i]); } } copyRow(0); copyRow(0); function showTable() { clear(); if (slideShow == false) { text("Mode: Default (Enable slideShow for effects).", 20, 20); } for (let c = 0; c < 1; c++) { text(table.columns, 20 + 80 * c, 80); } for (let r = 0; r < rowCount + countCopies + totalCount; r++) { for (let c = 0; c < columnNames.length; c++) { text(table.getString(r, c), 20 + 80 * c, 100 + 20 * r); } } } function Total() { placeholder = 0; let totalRow = table.addRow(); totalRow.setString(columnNames[0], "Sum"); for (let i = 1; i < table.getColumnCount(); i++) { placeholder = parseInt(table.getString(0, columnNames[i])); if (rowsToAdd.length == 0) { rowsToAdd.length = 1; } totalRow.setString(columnNames[i], placeholder * rowsToAdd.length); } } if (true == true) { Total(); } function NextSlide() { clear(); slideCounter = slideCounter + 1; print("click", slideCounter); for (let c = 0; c < 1; c++) { text(table.columns, 20 + 80 * c, 80); } for (let r = 0; r < slideCounter; r++) { if (slideCounter == table.getRowCount() + 1) { clear(); for (let c = 0; c < 1; c++) { text(table.columns, 20 + 80 * c, 80); } slideCounter = 1; } for (let c = 0; c < columnNames.length; c++) { text(table.getString(r, c), 20 + 80 * c, 100 + 20 * r); } } } noLoop();}'
 };
 