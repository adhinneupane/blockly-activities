var workspace = Blockly.inject('toolboxDiv', {toolbox: toolbox});

function makeCode(){
var code = Blockly.JavaScript.workspaceToCode(workspace);
console.log("i am here:", code);
document.getElementById("printscreen").innerHTML=code;
}



function runCode(){
    const script = document.createElement('script');
    var executable = document.getElementById('printscreen').innerHTML;
    script.innerText= executable;
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

