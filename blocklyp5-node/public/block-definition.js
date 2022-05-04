var headerCount = 1;
var entryCount = 0; 
var addedCount = 0;


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

Blockly.defineBlocksWithJsonArray([
  {
    "type": "repeat_row",
    "message0": "Copy Row %1",
    "args0": [
      {
        "type": "field_input",
        "name": "row_to_be_copied",
        "text": "row number"
      }
    ],
    "previousStatement":null,
    "nextStatement":null,
    "colour": 180,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "total_row",
    "message0": "Sum %1",
    "args0": [
      {
        "type": "field_input",
        "name": "row_to_be_added",
        "text": "rows to add"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 285,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "input_header",
    "message0": "Input %1 %2",
    "args0": [
      {
        "type": "field_input",
        "name": "col1",
        "text": "columnName"
      },
      {
        "type": "field_input",
        "name": "col2",
        "text": "value"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 110,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "row_input",
    "message0": "Row input %1 %2",
    "args0": [
      {
        "type": "field_input",
        "name": "COLUMNVALUE1",
        "text": "value"
      },
      {
        "type": "field_input",
        "name": "COLUMNVALUE2",
        "text": "value"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 250,
    "tooltip": "",
    "helpUrl": ""
  },{
    "type": "create_table",
    "message0": " Table %1",
    "args0": [
      {
        "type": "input_statement",
        "name": "NAME"
      }
    ],
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "show",
    "message0": "Show  %1",
    "args0": [
      {
        "type": "dummy_input",
        "name": "NAME",
        "checked": true
      }
    ],
    "previousStatement": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  }
]);

Blockly.JavaScript['row_input'] = function(block) {
  var CV1 = '"' + block.getFieldValue('COLUMNVALUE1') + '"';
  var CV2 = '"' + block.getFieldValue('COLUMNVALUE2') + '"';
  executable.userEntries.push(CV1);
  executable.userEntries.push(CV2);
  return 'done';  
};

Blockly.JavaScript['create_table'] = function(block) {
  var boolCreateTable = Blockly.JavaScript.statementToCode(block, 'NAME');
  executable.tableCreated =  true;
  return 'done'
};

Blockly.JavaScript['repeat_row'] = function(block) {
  var number_copy = block.getFieldValue('row_to_be_copied');
  // row count starts from 0 in p5
  number_copy = number_copy - 1; 
  var repeat_code = '';
  repeat_code += 'copyRow(' + number_copy +');';
  executable.rowstoCopy += repeat_code;
  return 'done';
};


Blockly.JavaScript['total_row'] = function(block) {
  var rowsAdd = block.getFieldValue('row_to_be_added');
  executable.rowsToAdd[addedCount] = rowsAdd;
  executable.sumEnabled = true;
  return 'done';
};

Blockly.JavaScript['input_header'] = function(block) {
  var tableHeader = block.getFieldValue('col1');
  var valueOfHeader = block.getFieldValue('col2');
  tableHeader = '"' + tableHeader + '"';
  valueOfHeader = '"' + valueOfHeader + '"';
  executable.columnNames[headerCount] = tableHeader;
  headerCount = headerCount + 1; 
  executable.userEntries[entryCount] = valueOfHeader;
  entryCount = entryCount + 1;
  return 'done'
};

 
Blockly.JavaScript['show'] = function(block) {
  var checkShow = block.getFieldValue('NAME');
  // TODO: Assemble JavaScript into code variable.
  executable.showEnabled = true ;
  return 'done'
};

