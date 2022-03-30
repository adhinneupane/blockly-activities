const ObjectMaker = {

    readyToExecute: "",
    
    writeandexecute:function(param2){
        ObjectMaker.readyToExecute += param2;
        console.log("readytoExecute", ObjectMaker.readyToExecute)
        programOutput = eval(ObjectMaker.readyToExecute);
        console.log('finaloutput=', programOutput);
        document.getElementById("printscreen").innerHTML=programOutput;
    },

    play:function(){

        console.log(eval(ObjectMaker.readyToExecute));
        backupExecutor(param3)
    }   
} 

function backupExecutor(param3){
    result = eval(param3);
    console.log(result);
}

function handleplay(){
    let code = Blockly.JavaScript.workspaceToCode(Blockly.getMainWorkspace());
    code = 'ObjectMaker.play();';
    console.log("eval will execute this code", code)
    try{
        eval(code);
        console.log("code = ",code)
    } catch (error){
        console.log("error",error);
    }
}
