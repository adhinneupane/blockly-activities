Blockly.defineBlocksWithJsonArray([
    {
        "type": "add",
        "message0": "number 1 %1 %2 number 2 %3 %4",
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
            "type": "input_value",
            "name": "NAME"
          }
        ],
        "inputsInline": false,
        "previousStatement": null,
        "nextStatement": null,
        "colour": 195,
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
        code +='function setup(){\ncreateCanvas(400, 400);\n}\nfunction draw(){\nrect(' + number_userenter1 + ',' + number_userenter1 + ',' + number_userenter2 + ',' + number_userenter2 + ')\n}' 
        // return 'Object.execute(' + code + ');\n';
        return code;
}   


//     function setup() {
//   createCanvas(400, 400);
// }

// function draw() {
//   rect(50,50,50,50)
// }



Blockly.JavaScript['sum'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

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

Blockly.JavaScript['table_rows'] = function(block) {
  var text_name1 = block.getFieldValue('NAME');
  var text_name2 = block.getFieldValue('NAME');
  var tableheader = '' + text_name1 + '%' + text_name2 + ''
  return tableheader;
};