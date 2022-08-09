let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -36.769313039539355, lng: 174.73564738910795 },
    zoom: 7,
  });
}

window.initMap = initMap;