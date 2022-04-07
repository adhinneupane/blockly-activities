

Blockly.defineBlocksWithJsonArray([
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
        "type": "add",
        "message0": "length %1 %2 breadth %3 %4",
        "args0": [
          {
            "type": "field_number",
            "name": "width",
            "value": 0
          },
          {
            "type": "input_value",
            "name": "num1",
            "align": "CENTRE"
          },
          {
            "type": "field_number",
            "name": "breadth",
            "value": 0
          },
          {
            "type": "input_value",
            "name": "num2",
            "align": "CENTRE"
          }
        ],
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
 
Blockly.JavaScript['add'] = function(block) {
        var number_userenter1 = block.getFieldValue('width');
        // var value_num1 = Blockly.JavaScript.valueToCode(block, 'num1', Blockly.JavaScript.ORDER_ATOMIC);
        var number_userenter2 =  block.getFieldValue('breadth');
        // var value_num2 = Blockly.JavaScript.valueToCode(block, 'num2', Blockly.JavaScript.ORDER_ATOMIC);
        // let value = '\'' + block.getFieldValue('number1') + '\'';
        let code = ''
        code +='function setup(){\ncreateCanvas(500, 500);\n}\nfunction draw(){\nrect(' + number_userenter1 + ',' + number_userenter1 + ',' + number_userenter2 + ',' + number_userenter2 + ')\n}'
        // return 'Object.execute(' + code + ');\n';
        return code;
}  
 

Blockly.JavaScript['row_input'] = function(block) {
  var columnValue1  = block.getFieldValue('COLUMNVALUE1');
  var columnValue2 = block.getFieldValue('COLUMNVALUE2');
  executable.rowvalue1 = columnValue1;
  executable.rowvalue2 = columnValue2; 
  return executable.rowvalue1, executable.rowvalue2;
};

Blockly.JavaScript['create_table'] = function(block) {
  var boolCreateTable = Blockly.JavaScript.statementToCode(block, 'NAME');
  executable.createtable = '';
  return executable.createtable;
};

Blockly.JavaScript['input_header'] = function(block) {
  var tableHeader1 = block.getFieldValue('col1');
  var tableHeader2 = block.getFieldValue('col2');
  // TODO: Assemble JavaScript into code variable.
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
