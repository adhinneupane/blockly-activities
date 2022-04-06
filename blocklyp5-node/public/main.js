var workspace = Blockly.inject('toolboxDiv', {toolbox: toolbox});

function makeCode(){
var code = Blockly.JavaScript.workspaceToCode(workspace);
document.getElementById("printscreen").innerHTML=code;
}



function runCode(){
    const script = document.createElement('script');
    var code = Blockly.JavaScript.workspaceToCode(workspace);
    var executable = code;
    script.innerText= '' + executable;
    console.log(executable);
    script.setAttribute('async','true');
    script.onload = function handleScriptLoad(){
        console.log('The p5 script has loaded')      
    }    
    script.onerror = function handleScriptError(){
        console.log('An error has occured')
    }
    document.head.appendChild(script); 
}

