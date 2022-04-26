Blockly.defineBlocksWithJsonArray([
  {
    "type": "slide_show",
    "message0": "SlideShow %1",
    "args0": [
      {
        "type": "field_checkbox",
        "name": "slideShow",
        "checked": true
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  },
  {
    "type": "repeat_row",
    "message0": "Copy Row Number %1",
    "args0": [
      {
        "type": "field_input",
        "name": "row_to_be_copied",
        "text": "row number"
      }
    ],
    "previousStatement":null,
    "nextStatement":null,
    "colour": 230,
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
    "colour": 230,
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
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  },{
    "type": "create_table",
    "message0": "Create Table %1",
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
    "type": "block_type",
    "message0": "Sum %1",
    "args0": [
      {
        "type": "field_checkbox",
        "name": "NAME",
        "checked": true
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
        "type": "field_checkbox",
        "name": "NAME",
        "checked": true
      }
    ],
    "previousStatement": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  },
      {
        "type": "sum",
        "message0": "Sum %1",
        "args0": [
          {
            "type": "field_checkbox",
            "name": "SUMENABLED",
            "checked": true
          }
        ],
        "previousStatement": null,
        "nextStatement": null,
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
  executable.tableCreated =  boolCreateTable;
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


Blockly.JavaScript['input_header'] = function(block) {
  var tableHeader1 = block.getFieldValue('col1');
  var tableHeader2 = block.getFieldValue('col2');
  tableHeader1 = '"' + tableHeader1 + '"';
  tableHeader2 = '"' + tableHeader2 + '"';
  executable.columnNames[1] = tableHeader1;
  executable.columnNames[2] = tableHeader2;
  return 'done'
};

Blockly.JavaScript['sum'] = function(block) {
  var checkSum = block.getFieldValue('SUMENABLED');
  executable.sumEnabled =  true ;
  return 'done'
};
 
Blockly.JavaScript['show'] = function(block) {
  var checkShow = block.getFieldValue('NAME');
  // TODO: Assemble JavaScript into code variable.
  executable.showEnabled = true ;
  return 'done'
};

Blockly.JavaScript['slide_show'] = function(block) {
  var checkbox_slideshow = block.getFieldValue('slideShow') === 'TRUE';
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  executable.slideShow = checkbox_slideshow; 
  return code;
};
