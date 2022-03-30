Blockly.defineBlocksWithJsonArray([
  {
    "type": "rectangle",
    "message0": "%1 %2",
    "args0": [
      {
        "type": "field_input",
        "name": "firstrowvalue1",
        "text": "row1"
      },
      {
        "type": "field_input",
        "name": "secondrowvalue1",
        "text": "row2"
      }
    ],
    "output": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
  }]);


Blockly.JavaScript['rectangle'] = function(block) {
  var width = block.getFieldValue('firstrowvalue1');
  var height = block.getFieldValue('secondrowvalue1');
  var code = "rect(" + width+ "," + height + "," + width + "," + height + ");" 
  return code 
};


