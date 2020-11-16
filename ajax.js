
    var table = document.getElementById("table")
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var List = JSON.parse(this.responseText);                
            var item = List.items;           
            var output = "<caption><h1>Grocery Item Table</h1></caption><tr><th>Sl.No.</th><th>Item Name</th><th>Quantiy</th><th>Unit</th><th>Department</th><th>Notes</th></tr>";
            for (var i = 0; i < item.length; i++) {
                    output += "<tr>";
                    output += "<td>" + item[i].slno + "</td>";
                    output += "<td>" + item[i].name + "</td>";
                    output += "<td>" + item[i].qnty + "</td>";
                    output += "<td>" + item[i].unit + "</td>";
                    output += "<td>" + item[i].dpmt + "</td>";
                    output += "<td>" + item[i].note + "</td>";    
            }

            table.innerHTML = output;
        }
    }
    xhttp.open("GET", "groceryitems.json", true);
    xhttp.send();