var workspace = Blockly.inject('toolboxDiv', {toolbox: toolbox});

function makecode(){
  var code = Blockly.JavaScript.workspaceToCode(workspace);
  console.log(code);
}

