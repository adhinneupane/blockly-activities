var headerCount = 1;
var entryCount = 0; 
var addedCount = 0;
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


Blockly.JavaScript['total_row'] = function(block) {
  var rowsAdd = block.getFieldValue('row_to_be_added');
  executable.rowsToAdd[addedCount] = rowsAdd;
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

