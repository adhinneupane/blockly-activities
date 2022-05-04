Blockly.JavaScript['show'] = function(block) {
    var checkShow = block.getFieldValue('NAME');
    // TODO: Assemble JavaScript into code variable.
    executable.showEnabled = true ;
    return 'done'
  };