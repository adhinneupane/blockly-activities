



const fs = require('fs');
const content = 'this is will be replaced with code later';



writeCode = function(){
fs.writeFile('Executable/blockly/executable01.js', content, err =>{
    if (err){
        console.log(err)
        return
    }
    console.log('wrote the file successfully')
})    
}


