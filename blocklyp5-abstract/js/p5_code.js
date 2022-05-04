var headerCount = 1;
var entryCount = 0; 
var addedCount = 0;

const executable={
  // disabled all object properties before executing conversion of blockly workspace to p5 code.
  userEntries: [],
  tableCreated : "false",
  columnNames : ['"SerialNo"'],
  sumEnabled: "false", 
  slideShow : "false", 
  countCopies: 0,
  showEnabled: "false",
  rowstoCopy : "",
  insert: function(key1,key2){
      this.userEntries.push(key1);
      this.userEntries.push(key2);
  },
  runProgram:0,
  rowCounter: 0,
  rowsToAdd : []
} 

executableString = 'function setup() {var myCanvas = createCanvas(600, 600); noLoop(); textSize(20); } function draw() { copyValues = []; rowCount=0; rowsToAdd = ['+ executable.rowsToAdd + ']; slideCounter=0; background(225,225,225); columnNames = [ '+ executable.columnNames+']; userEntries = ['+executable.userEntries+']; sumEnabled = true; showEnabled =  true; rowstoCopy = 0; countCopies = 0; tableCreated=true; slideShow =  true; serialNumber = 0; pageNumber=0;  table = new p5.Table();  for(let i=0;i<columnNames.length;i++){ table.addColumn(columnNames[i]); }; setBtn=createButton("Next Page"); setBtn.position(1020,70); setBtn.mouseClicked(NextSlide); let addRow = table.addRow(); rowCount = rowCount + 1 ; serialNumber = 1; addRow.setString(columnNames[0], ""+1); j = 0; for (let i=1; i<columnNames.length; i++){ addRow.setString(columnNames[i], "" + userEntries[j]); j = j + 1; } function copyRow(copiedRow){ countCopies = countCopies + 1; serialNumber = serialNumber + 1; for (let i =1; i<table.getColumnCount(); i++){ copyValues[i] = table.getString(copiedRow,i); } let newRow=table.addRow(); newRow.setString(columnNames[0],""+ serialNumber); for (let i =1; i<table.getColumnCount(); i++){ newRow.setString(columnNames[i],""+ copyValues[i]); } }'+executable.rowstoCopy+'; function showTable() { clear(); if (slideShow==false){ text("Mode: Default (Enable slideShow for effects).",20,20); } for (let c = 0; c < 1; c++) { text(table.columns, 20 + 80 * c, 80); } for (let r = 0; r < rowCount + countCopies + totalCount; r++){ for (let c = 0; c < columnNames.length; c++) { text(table.getString(r, c), 20 + 80 * c, 100 + 20 * r); } } }  function Total(){ placeholder = 0; let totalRow = table.addRow(); totalRow.setString(columnNames[0],"Sum"); for (let i = 1; i <table.getColumnCount(); i ++){ placeholder = parseInt(table.getString(0,columnNames[i]));if(rowsToAdd.length==0){ rowsToAdd.length=1} totalRow.setString(columnNames[i],placeholder*rowsToAdd.length)  } }if('+executable.sumEnabled+'==true){Total();} function NextSlide(){ clear(); slideCounter = slideCounter + 1; print ("click",slideCounter); for (let c = 0; c < 1; c++) { text(table.columns, 20 + 80 * c, 80); } for (let r = 0; r < slideCounter; r++){ if (slideCounter == table.getRowCount()+1){ clear(); for (let c = 0; c < 1; c++) { text(table.columns, 20 + 80 * c, 80); } slideCounter = 1; } for (let c = 0; c < columnNames.length; c++) { text(table.getString(r, c), 20 + 80 * c, 100 + 20 * r); } }  } noLoop(); }'

Blockly.JavaScript['background'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'background(' + value_name + ');\n';
  return code;
};
Blockly.JavaScript['createcanvas'] = function(block) {
  var value_width = Blockly.JavaScript.valueToCode(block, 'width', Blockly.JavaScript.ORDER_ATOMIC);
  var value_height = Blockly.JavaScript.valueToCode(block, 'height', Blockly.JavaScript.ORDER_ATOMIC);
  var value_canvas = Blockly.JavaScript.valueToCode(block, 'canvas', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'var myCanvas = createCanvas(' + value_width + ',' + value_height +');\n' + 'myCanvas.parent(' + value_canvas + ');\n';
  return code;
};
Blockly.JavaScript['draw'] = function(block) {
  var statements_do = Blockly.JavaScript.statementToCode(block, 'do');
  // TODO: Assemble JavaScript into code variable.
  var code = 'draw = function() {\n' + statements_do + '};\n';
  return code;
};
Blockly.JavaScript['ellipse'] = function(block) {
  var value_x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC);
  var value_w = Blockly.JavaScript.valueToCode(block, 'width', Blockly.JavaScript.ORDER_ATOMIC);
  var value_h = Blockly.JavaScript.valueToCode(block, 'height', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'ellipse(' + value_x + ',' + value_y + ',' + value_w + ',' + value_h + ');\n';
  return code;
};
Blockly.JavaScript['fill'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'fill(' + value_name + ');\n';
  return code;
};
Blockly.JavaScript['mousex'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'mouseX';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code];
};
Blockly.JavaScript['mousey'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'mouseY';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code];
};
Blockly.JavaScript['rect'] = function(block) {
  var value_x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC);
  var value_w = Blockly.JavaScript.valueToCode(block, 'width', Blockly.JavaScript.ORDER_ATOMIC);
  var value_h = Blockly.JavaScript.valueToCode(block, 'height', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'rect(' + value_x + ',' + value_y + ',' + value_w + ',' + value_h + ');\n';
  return code;
};
Blockly.JavaScript['setup'] = function(block) {
  var statements_do = Blockly.JavaScript.statementToCode(block, 'do');
  // TODO: Assemble JavaScript into code variable.
  var code = 'setup = function() {\n' + statements_do + '};\n';
  return code;
};

Blockly.JavaScript['input_header'] = function(block) {
  var tableHeader = block.getFieldValue('col1');
  var valueOfHeader = block.getFieldValue('col2');
  tableHeader = '"' + tableHeader + '"';
  valueOfHeader = '"' + valueOfHeader + '"';
  executable.columnNames[headerCount] = tableHeader;
  headerCount = headerCount + 1; 
  executable.userEntries[entryCount] = valueOfHeader;
  entryCount = entryCount + 1;
};

Blockly.JavaScript['total_row'] = function(block) {
  var rowsAdd = block.getFieldValue('row_to_be_added');
  executable.rowsToAdd[addedCount] = rowsAdd;
  executable.sumEnabled = true;
};

Blockly.JavaScript['copy_row'] = function(block) {
  var number_copy = block.getFieldValue('row_to_be_copied');
  // row count starts from 0 in p5
  number_copy = number_copy - 1; 
  var repeat_code = '';
  repeat_code += 'copyRow(' + number_copy +');';
  executable.rowstoCopy += repeat_code;
};

Blockly.JavaScript['show'] = function(block) {
  var checkShow = block.getFieldValue('NAME');
  // TODO: Assemble JavaScript into code variable.
  executable.showEnabled = true ;

  return " setup = function() {var myCanvas = createCanvas(400, 400); myCanvas.parent(myContainer);  textSize(50); } ; draw = function() { copyValues = []; rowCount=0; rowsToAdd = [1]; slideCounter=0; columnNames = [ \"SerialNo\",\"caterpilar\",\"leaves\"]; userEntries = [\"2\",\"5\"]; sumEnabled = true; showEnabled =  true; rowstoCopy = 0; countCopies = 0; tableCreated=true; slideShow =  true; serialNumber = 0; pageNumber=0;  table = new p5.Table();  for(let i=0;i<columnNames.length;i++){ table.addColumn(columnNames[i]); }; let addRow = table.addRow(); rowCount = rowCount + 1 ; serialNumber = 1; addRow.setString(columnNames[0], \"\"\+1); j = 0; for (let i=1; i<columnNames.length; i++){ addRow.setString(columnNames[i], \"\" + userEntries[j]); j = j + 1; } function copyRow(copiedRow){ countCopies = countCopies + 1; serialNumber = serialNumber + 1; for (let i =1; i<table.getColumnCount(); i++){ copyValues[i] = table.getString(copiedRow,i); } let newRow=table.addRow(); newRow.setString(columnNames[0],\"\"+ serialNumber); for (let i =1; i<table.getColumnCount(); i++){ newRow.setString(columnNames[i],\"\"+ copyValues[i]); } }copyRow(0);; function showTable() { clear(); if (slideShow==false){ text(\"Mode: Default (Enable slideShow for effects).\",20,20); } for (let c = 0; c < 1; c++) { text(table.columns, 20 + 80 * c, 80); } for (let r = 0; r < rowCount + countCopies + totalCount; r++){ for (let c = 0; c < columnNames.length; c++) { text(table.getString(r, c), 20 + 80 * c, 100 + 20 * r); } } }  slideCounter =2; NextSlide(); function Total(){ placeholder = 0; let totalRow = table.addRow(); totalRow.setString(columnNames[0],\"Sum\"); for (let i = 1; i <table.getColumnCount(); i ++){ placeholder = parseInt(table.getString(0,columnNames[i]));if(rowsToAdd.length==0){ rowsToAdd.length=1} totalRow.setString(columnNames[i],placeholder*rowsToAdd.length)  } }if(true==true){Total();} function NextSlide(){ clear(); slideCounter = slideCounter + 1;  for (let c = 0; c < 1; c++) { text(table.columns, 20 + 80 * c, 80); } for (let r = 0; r < slideCounter; r++){ if (slideCounter == table.getRowCount()+1){ clear(); for (let c = 0; c < 1; c++) { text(table.columns, 20 + 80 * c, 80); } slideCounter = 1; } for (let c = 0; c < columnNames.length; c++) { text(table.getString(r, c), 20 + 80 * c, 100 + 20 * r); } }  }  }"
};



Blockly.JavaScript['create_table'] = function(block) {
  var boolCreateTable = Blockly.JavaScript.statementToCode(block, 'NAME');
  executable.tableCreated =  true;
};