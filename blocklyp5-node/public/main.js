var workspace = Blockly.inject('toolboxDiv', {toolbox: toolbox});

function makeCode(){
var code = Blockly.JavaScript.workspaceToCode(workspace);
document.getElementById("printscreen").innerHTML=code;
}


const executable={
    codeString : ''
}


function runCode(){
    const script = document.createElement('script');
    var code = Blockly.JavaScript.workspaceToCode(workspace);
    var compiler = code;
    script.innerText= '' + compiler;
    console.log("executable string is:",executable.codeString );
    script.setAttribute('async','true');
    script.onload = function handleScriptLoad(){
        console.log('The p5 script has loaded')      
    }    
    script.onerror = function handleScriptError(){
        console.log('An error has occured')
    }
    document.head.appendChild(script); 
}

