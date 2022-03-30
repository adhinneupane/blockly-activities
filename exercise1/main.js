Blockly.inject('toolboxDiv', {
    toolbox: document.getElementById('toolbox'),
    scrollbars: false
  });

function save(){
  toolboxDiv.blocklyXML = Blockly.serialization.workspaces.save(
    Blockly.getMainWorkspace());
    toolboxDiv.blocklySave;
    console.log('Main workspace blockly=',Blockly.getMainWorkspace())

}


function loadWorkspace(b) {
  const workspace = Blockly.getMainWorkspace();
  if (toolboxDiv.blocklySave) {
    Blockly.serialization.workspaces.load(toolboxDiv.blocklySave, workspace);
  }
}


// function save(toolboxDiv){
//   toolboxDiv.blocklySave = Blockly.serialization.workspaces.save(
//     Blockly.getMainWorkspace());
//     console.log(toolboxDiv.blocklySave);
// }

// function play(event){
//   loadWorkSpace(event.target);
//   let code = Blockly.JavaScript.workspaceToCode(Blockly.getMainWorkspace());
//   code += '';

// }
