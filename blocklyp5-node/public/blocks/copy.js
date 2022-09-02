Blockly.Blocks['copy_row'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(".copy_row ")
          .appendField(new Blockly.FieldTextInput("rowNumber"), "row_to_be_copied");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(190);
    this.setTooltip(" Select the rows to be copied/repeated in the table. \n Type: Object Property \n Example: [Object].copy_row (1)");
    this.setHelpUrl("");
    }
  };

Blockly.JavaScript['copy_row'] = function(block) {
    var number_copy = block.getFieldValue('row_to_be_copied');
    // row count starts from 0 in p5
    counters.copyCounter = counters.copyCounter + 1; 
    if (number_copy>counters.copyCounter){
      document.getElementById('canvasHelp').innerText = "Table does not have row number: " +number_copy+  " so it cannot be copied";
      document.getElementById('canvasHelp').setColour = "red";
    }
    return ""
  };