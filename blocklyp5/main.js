

var workspace = Blockly.inject('toolboxDiv', {toolbox: toolbox});

function makecode(){
  var code = Blockly.JavaScript.workspaceToCode(workspace);
  console.log("i am here:", code);
  writeCode();
}

export const executableCode = code;

var blob = new Blob(["Welcome to Websparrow.org."],
                { type: "text/plain;charset=utf-8" });

writeCode(){

}