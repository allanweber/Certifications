window.onload = function () {

    var customer = new Object();
    customer.firstName = "Rick";
    customer.lastName = "Delorme";
    customer.shirtSize = "XL";
    localStorage.setItem("cart1", JSON.stringify(customer));

    LoadFromStorage();
    document.getElementById("btnAdd").onclick = function () {
        localStorage.setItem(document.getElementById("toStorageKey").value,
            document.getElementById("toStorageValue").value);
        LoadFromStorage();
    }

    document.getElementById("btnRemove").onclick = function () {
        localStorage.removeItem(document.getElementById("toStorageKey").value);
        LoadFromStorage();
    }

    document.getElementById("btnClear").onclick = function () {
        localStorage.clear();
        LoadFromStorage();
    }


    function LoadFromStorage() {
        var storageDiv = document.getElementById("storage");
        var tbl = document.createElement("table");
        tbl.id = "storageTable";
        if (localStorage.length > 0) {
            for (var i = 0; i < localStorage.length; i++) {
                var row = document.createElement("tr");
                var key = document.createElement("td");
                var val = document.createElement("td");
                key.innerText = localStorage.key(i);
                val.innerText = localStorage.getItem(key.innerText);
                row.appendChild(key);
                row.appendChild(val);
                tbl.appendChild(row);
            }
        }
        else {
            var row = document.createElement("tr");
            var col = document.createElement("td");
            col.innerText = "No data in local storage.";
            row.appendChild(col);
            tbl.appendChild(row);
        }
        if (document.getElementById("storageTable")) {
            document.getElementById("storageTable").remove();
            storageDiv.appendChild(tbl);
        }
        else {
            storageDiv.appendChild(tbl);
        }
    }
}