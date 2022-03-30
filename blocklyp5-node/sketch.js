writecode = function(){
  var workspace = Blockly.inject('toolboxDiv', {toolbox: toolbox});
  var code = Blockly.JavaScript.workspaceToCode(workspace);
}




  