

var workspace = Blockly.inject('toolboxDiv', {toolbox: toolbox});

function makecode(){
  var code = Blockly.JavaScript.workspaceToCode(workspace);
  console.log("i am here:", code);
  var file = new File(["foo"], "foo.txt", {
    type: "text/plain",
  });
  console.log()
}