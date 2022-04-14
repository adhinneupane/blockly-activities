Blockly.defineBlocksWithJsonArray([
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
    "message0": "Table Header %1 %2",
    "args0": [
      {
        "type": "field_input",
        "name": "col1",
        "text": "column1"
      },
      {
        "type": "field_input",
        "name": "col2",
        "text": "column2"
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
  var CV1  = block.getFieldValue('COLUMNVALUE1');
  var CV2 = block.getFieldValue('COLUMNVALUE2');
  let outputString = ''; 
  outputString += ',' + '"' + CV1 + '"' + ',' + '"' + CV2 + '"';
  executable.hold += outputString;
  return 'jibberish';  
};

Blockly.JavaScript['create_table'] = function(block) {
  var boolCreateTable = Blockly.JavaScript.statementToCode(block, 'NAME');
  executable.createtable = '';
  return executable.createtable;
};

Blockly.JavaScript['repeat_row'] = function(block) {
  var number_copy = block.getFieldValue('row_to_be_copied');
  // TODO: Assemble JavaScript into code variable.
  var repeat_code = '';
  repeat_code += 'CopyRow(' + number_copy +');';
  executable.rows_to_be_copied += repeat_code;
  return 'whatever';
};


Blockly.JavaScript['input_header'] = function(block) {
  var tableHeader1 = block.getFieldValue('col1');
  var tableHeader2 = block.getFieldValue('col2');
  // TODO: Assemble JavaScript into code variable.
  executable.user_entry_column1 = ''; 
  executable.user_entry_column2 = '';
  executable.user_entry_column1 += tableHeader1;
  executable.user_entry_column2 += tableHeader2;
  return executable.user_entry_column1, executable.user_entry_column2;
};




Blockly.JavaScript['sum'] = function(block) {
  var checkSum = block.getFieldValue('SUMENABLED');
  executable.sum = checkSum;
  return executable.sum;
};
 
Blockly.JavaScript['show'] = function(block) {
  var checkShow = block.getFieldValue('NAME');
  // TODO: Assemble JavaScript into code variable.
  executable.show_enabled = checkShow;
  return executable.show_enabled;
};
