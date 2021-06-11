var mymap = L.map('mapid').setView([40, -97], 5);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1
}).addTo(mymap);

L.marker([41, -72]).addTo(mymap).bindPopup("<b>Hello world!</b><br />I am an alone popup Brian!.").openPopup();

L.circle([42, -90], 50000, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.25
}).addTo(mymap).bindPopup("I am an alone circle.");

L.polygon([
    [45, -72],
    [51.503, -85],
    [50,-72],
    [40, -75]
]).addTo(mymap).bindPopup("I am an alone polygon.").openPopup();



$.get("https://brhall69.github.io/UCGIS-Fullstack-Geovisualization-Workshop/data/UFO.geojson", visualize_geojson)

function visualize_geojson(data) {
    L.geoJSON(data, {
        pointToLayer: convert_point_to_symbol
    }).addTo(mymap);
}

function convert_point_to_symbol(feature, latlng) {
    return L.circleMarker(latlng, {
        radius: 18,
        fillColor: "#ff7800",
        color: "#000",
        weight: 1,
        opacity: 1,
        fillOpacity: 0.8
    });
}


var popup = L.popup();

function onMapClick(event) {
    popup.setLatLng(event.latlng)
        .setContent("Brian, You clicked the map at " + event.latlng.toString())
        .openOn(mymap);
}

mymap.on('click', onMapClick);


