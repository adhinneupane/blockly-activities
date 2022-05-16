Blockly.JavaScript['create_table'] = function(block) {
    var boolCreateTable = Blockly.JavaScript.statementToCode(block, 'NAME');
    executable.tableCreated =  true;
    return 'done'
  };