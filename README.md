

### Blockly + p5
### Interactive Bellringers for Introduction to Computing Courses

<img align="center" width="200" height="200" padding-bottom="50" src="https://developers.google.com/static/blockly/images/logos/logo_standard.svg">
<img align="center" width="100" height="100" src="https://nodejs.org/static/images/logo.svg">
<img align="center" width="150" height="80" src="https://www.sqlite.org/images/sqlite370_banner.gif">


## Source Files for bellringer is in : blocklyp5-node\sourcefile.js

1.  
   ```
   git clone git@github.com:ashutoshneupane/brbytes.git
   ```

2. 
   ```
   Visit index.html
   ```

### Blockly + p5 - (Node/JS/HTML/CSS)

1.  
   ```
   git clone git@github.com:ashutoshneupane/brbytes.git
   ```
    
2. Make sure you have nodejs and express installed
   ```
   node --version
   npm install express 
   ```

3.  
   ```
   cd ICT-blockly-P5/blocklyp5-node/ &&
   node app.js
   ```

4. 
   ```
   visit server on port http://localhost:8080/home
   ```

General Structure

```

const s = ( sketch ) => { sketch.setup = () => { sketch.createCanvas(500, 500); sketch.textSize(20); 
                                               };
sketch.draw = () => {  let table = new p5.Table();
                     
                     table.addColumn("columnName"); 
                     var newRow = table.addRow();      
                     newRow.setString("columnName",2);                                                                   
    } 
};


let myp5 = new p5(s, document.getElementById("canvasArea"));

```