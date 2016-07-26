var geoLocator;

class locationClass {
    constructor() {
        var self = this;
        self.latitude = 0;
        self.longitude = 0;
    }
}

function initMap() {

    if (localStorage.length == 0) return;

    var loc = JSON.parse(localStorage.getItem(localStorage.key(localStorage.length - 1)));

    var myLatLng = { lat: loc.latitude, lng: loc.longitude };

    var map = new google.maps.Map(document.getElementById('mapholder'), {
        zoom: 17,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Você está aqui!'
    });

}

window.onload = function () {
    localStorage.clear();
    window.setInterval(loadLocation, 60000);

    function loadLocation() {
        geoLocator = window.navigator.geolocation;
        geoLocator.getCurrentPosition(successPosition);
    }

    function successPosition(pos) {

        if (localStorage.length >= 10)
            localStorage.clear();

        var loc = new locationClass()
        loc.latitude = pos.coords.latitude;
        loc.longitude = pos.coords.longitude;

        localStorage.setItem(localStorage.length + 1, JSON.stringify(loc));
        loadStorage();
        initMap();
    }

    function errorPosition(err) {
        var sp = document.createElement("p");
        sp.innerText = "error: " + err.message; + " code: " + err.code;
        document.getElementById("geoResults").appendChild(sp);
    }

    function loadStorage() {
        var table = document.createElement("table");
        table.id = "tbLocation";
        document.getElementById("tbLocation").remove();
        document.getElementById("locationDiv").appendChild(table);

        if (localStorage.length > 0) {
            for (var index = 0; index < localStorage.length; index++) {
                var loc = JSON.parse(localStorage.getItem(localStorage.key(index)));

                var row = document.createElement("tr");
                var long = document.createElement("td");
                var lat = document.createElement("td");

                long.innerText = loc.longitude;
                lat.innerText = loc.latitude;

                row.appendChild(long);
                row.appendChild(lat);
                table.appendChild(row)
            }
        }
    }
}