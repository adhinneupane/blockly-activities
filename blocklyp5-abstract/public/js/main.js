// blockp5js = p5.js + blockly

import { BlocklyManager } from "./blocklyManager.js";
import { onResize } from "./onResize.js";
import { Blockp5 } from "./blockp5.js";
import {executable,counters} from "./p5_code.js" 

function flushObject(){
    // flush the properties of executable object and refresh the counters
    executable.userEntries.splice(0,executable.userEntries.length);
    executable.columnNames.splice(1,executable.columnNames.length);
    executable.tableCreated = false; 
    executable.sumEnabled= "false", 
    executable.slideShow = "false", 
    executable.countCopies= 0,
    executable.showEnabled= "false",
    executable.rowstoCopy = "";
    executable.userEntries.length = 0;
    console.log("Flush is initiated userEntries is/n", executable.userEntries )
    counters.headerCount = 1,
    counters.entryCount = 0, 
    counters.addedCount = 0
}


const blocklyManager = new BlocklyManager();
// const executable={
//     // disabled all object properties before executing conversion of blockly workspace to p5 code.
//     userEntries: [],
//     tableCreated : "false",
//     columnNames : ['"SerialNo"'],
//     sumEnabled: "false", 
//     slideShow : "false", 
//     countCopies: 0,
//     showEnabled: "false",
//     rowstoCopy : "",
//     insert: function(key1,key2){
//         this.userEntries.push(key1);
//         this.userEntries.push(key2);
//     },
//     runProgram:0,
//     rowCounter: 0,
//     rowsToAdd : []
// } 




// Add resize
window.addEventListener('resize', function() {onResize(blocklyManager);}, false);
window.scrollTo(0, 0);
blocklyManager.workspace.resizeContents();
setTimeout(function() {
    onResize(blocklyManager);
    Blockly.svgResize(blocklyManager.workspace);
}, 1000)


// Init blockp5
var blockp5 = new Blockp5(blocklyManager.workspace);
blockp5.viewCode();
blockp5.runCode();

document.getElementById('p5Run').onclick = function() {
    flushObject();
    blockp5.runCode();
};

document.getElementById('p5Reset').onclick = function() {
    if (confirm("Reset All!")) {
        window.scrollTo(0, 0);
        location.reload(false);
    }
};

document.getElementById('blockly_code_tab').onclick = function() {
    flushObject();
    blockp5.viewCode();
};


