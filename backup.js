const s = (p) => {
    p.setup = function () {
        myCanvas = p.createCanvas(400, 400);
        p.textSize(20);
        p.noLoop();
      };
    p.draw = function () {
        p.mousePressed=function(){
            p.NextSlide()
        }
        copyValues = [];
        rowCount = 0;
        rowsToAdd = executable.rowsToAdd;
        slideCounter = 0;
        p.background(225, 225, 225);
        //columnNames = ["SerialNo", "Caterpillar", "Leaves", "new"];
        columnNames = executable.columnNames;
        userEntries = executable.userEntries;
        sumEnabled = executable.sumEnabled;
        showEnabled = executable.showEnabled;
        rowstoCopy = 0;
        countCopies = 0;
        tableCreated = true;
        slideShow = true;
        serialNumber = 0;
        pageNumber = 0;
        table = new p5.Table();
        for (let i = 0; i < columnNames.length; i++) {
          table.addColumn(columnNames[i]);
        }
        let addRow = table.addRow();
        rowCount = rowCount + 1;
        serialNumber = 1;
        addRow.setString(columnNames[0], "" + 1);
        j = 0;
        for (let i = 1; i < columnNames.length; i++) {
          addRow.setString(columnNames[i], "" + userEntries[j]);
          j = j + 1;
        }
        function copyRow(copiedRow) {
          countCopies = countCopies + 1;
          serialNumber = serialNumber + 1;
          for (let i = 1; i < table.getColumnCount(); i++) {
            copyValues[i] = table.getString(copiedRow, i);
          }
          let newRow = table.addRow();
          newRow.setString(columnNames[0], "" + serialNumber);
          for (let i = 1; i < table.getColumnCount(); i++) {
            newRow.setString(columnNames[i], "" + copyValues[i]);
          }
        }
        for (let i = 0; i < counters.copyCounter; i ++){
            copyRow(0);
        }
          p.Total=function() {
          placeholder = 0;
          let totalRow = table.addRow();
          totalRow.setString(columnNames[0], "Sum");
          for (let i = 1; i < table.getColumnCount(); i++) {
            placeholder = parseInt(table.getString(0, columnNames[i]));
            if (rowsToAdd.length == 0) {
              rowsToAdd.length = 1;
            }
            totalRow.setString(columnNames[i], placeholder * rowsToAdd.length);
          }
        }
        if (executable.sumEnabled == true) {
          p.Total();
        }
        p.NextSlide=function() {
            p.clear();
          slideCounter = slideCounter + 1;
          p.print("click", slideCounter);
          for (let c = 0; c < 1; c++) {
            p.text(table.columns, 20 + 85 * c, 80);
          }
          for (let r = 0; r < slideCounter; r++) {
            if (slideCounter == table.getRowCount() + 1) {
                p.clear();
              for (let c = 0; c < 1; c++) {
                p.text(table.columns, 20 + 80 * c, 80);
              }
              slideCounter = 1;
            }
            for (let c = 0; c < columnNames.length; c++) {
                p.text(table.getString(r, c), 20 + 80 * c, 100 + 20 * r);
            }
          }
        }
        p.NextSlide();
      };
    };
    if(executable.showEnabled == true){
      let myp5 = new p5(s, 'defaultCanvas0');
    } 