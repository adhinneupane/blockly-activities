

Blockly.defineBlocksWithJsonArray([
  {
    "type": "input_row",
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
        "name": "NAME",
        "text": "value"
      },
      {
        "type": "field_input",
        "name": "NAME",
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
            "name": "NAME",
            "checked": true
          }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 230,
        "tooltip": "",
        "helpUrl": ""
      },
      {
        "type": "row",
        "message0": "%1 %2",
        "args0": [
          {
            "type": "field_input",
            "name": "NAME",
            "text": "row1"
          },
          {
            "type": "field_input",
            "name": "NAME",
            "text": "row2"
          }
        ],
        "output": null,
        "colour": 230,
        "tooltip": "",
        "helpUrl": ""
      },
      {
        "type": "numeric_input",
        "message0": "number of leaves %1",
        "args0": [
          {
            "type": "field_number",
            "name": "number_of_leaves_input_by_user",
            "value": 0
          }
        ],
        "inputsInline": false,
        "output": null,
        "colour": 120,
        "tooltip": "",
        "helpUrl": ""
      },
      {
        "type": "table_information",
        "message0": "Table Header %1 Rows  %2",
        "args0": [
          {
            "type": "input_value",
            "name": "NAME"
          },
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
        "type": "table_rows",
        "message0": "%1 %2",
        "args0": [
          {
            "type": "field_input",
            "name": "NAME",
            "text": "row1"
          },
          {
            "type": "field_input",
            "name": "NAME",
            "text": "row2"
          }
        ],
        "inputsInline": true,
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
        code +='function setup(){\ncreateCanvas(4000000, 400000);\n}\nfunction draw(){\nrect(' + number_userenter1 + ',' + number_userenter1 + ',' + number_userenter2 + ',' + number_userenter2 + ')\n}'
        // return 'Object.execute(' + code + ');\n';
        return code;
}  
 

Blockly.JavaScript['block_type'] = function(block) {
  var checkbox_name = block.getFieldValue('NAME') === 'TRUE';
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['row_input'] = function(block) {
  var text_name = block.getFieldValue('NAME');
  var text_name = block.getFieldValue('NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['create_table'] = function(block) {
  var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
  // TODO: Assemble JavaScript into code variable.
  let code = ''
  code += 'string added from: create_table\n';
  return code;
  
};



Blockly.JavaScript['input_row'] = function(block) {
  var text_col1 = block.getFieldValue('col1');
  var text_col2 = block.getFieldValue('col2');
  // TODO: Assemble JavaScript into code variable.
  let code = '';
  code += 'string added from: input_row\n';
  executable.codeString += code;
  return code;
};

Blockly.JavaScript['sum'] = function(block) {
  var checkbox_name = block.getFieldValue('NAME') === 'TRUE';
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};
 

//     function setup() {
//   createCanvas(400, 400);
// }
 
// function draw() {
//   rect(50,50,50,50)
// }
 
Blockly.JavaScript['row'] = function(block) {
  var text_name = block.getFieldValue('NAME');
  var text_name = block.getFieldValue('NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
 
Blockly.JavaScript['numeric_input'] = function(block) {
  var number_number_of_leaves_input_by_user = block.getFieldValue('number_of_leaves_input_by_user');
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['show'] = function(block) {
  var checkbox_name = block.getFieldValue('NAME') === 'TRUE';
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['table_rows'] = function(block) {
  var text_name1 = block.getFieldValue('NAME');
  var text_name2 = block.getFieldValue('NAME');
  var tableheader = '' + text_name1 + '%' + text_name2 + ''
  return tableheader;
};
