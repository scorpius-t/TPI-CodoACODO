function readFile() {
    var e = document.getElementById("tipo-consulta");
    
    var filepath = e.options[e.selectedIndex].value;

    if (filepath!=""){
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            
            var table = document.createElement("table");
            table.className="table text-light"; //class= "table text-light"
            var rows = this.responseText.split("\n");
            if (rows.length>0){
            var cells = rows[0].split(",");
                if (cells.length > 1) {
                    var thead=table.createTHead();
                    var rowh = thead.insertRow(0);
                    for (var j = 0; j < cells.length; j++) {
                        var cell = rowh.insertCell(-1);
                        cell.innerHTML = cells[j];
                    }
                    var tbody=table.createTBody();
            for (var i = 1; i < rows.length; i++) {
                var cells = rows[i].split(",");
                if (cells.length > 1) {
                    var row = tbody.insertRow(-1);
                    for (var j = 0; j < cells.length; j++) {
                        var cell = row.insertCell(-1);
                        cell.innerHTML = cells[j];
                    }
                }
            }
            }
            }
            var dvCSV = document.getElementById("dvCSV");
            dvCSV.innerHTML = "";
            dvCSV.appendChild(table);
    
            // document.getElementById("demo").innerHTML =
            // this.responseText;
        }
        };
        xhttp.open("GET", filepath, true);
        xhttp.send();
    }
  }