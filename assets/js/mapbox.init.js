mapboxgl.accessToken = 'pk.eyJ1IjoicmFobWF0MjAwMCIsImEiOiJjbHlibXNkbWIwNDN3MnZwbHF4c3VxM3RsIn0.tz7zvpzW6RetT4C32G8xlg';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/dark-v10',
	center: [ 107.885756723948,-7.191938037615977], // starting position,
    zoom: 13 // starting zoom
});

map.on('load', function () {
    map.resize();
    $('a[data-bs-toggle="tab"]').on('shown.bs.tab', function(){
        map.resize();
    });
});

// create the popup
var popup = new mapboxgl.Popup({ offset: 40 }).setText(
    'Cimanganten Tarogong Kaler, Garut'
);

// create DOM element for the marker
var el = document.createElement('div');
el.id = 'marker';
 
// create the marker
new mapboxgl.Marker(el)
    .setLngLat([ 107.885756723948,-7.191938037615977])
    .setPopup(popup) // sets a popup on this marker
    .addTo(map);

// Add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');
