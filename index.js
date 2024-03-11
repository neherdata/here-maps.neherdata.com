// Initiate and authenticate your connection to the HERE platform:
const platform = new H.service.Platform({
  apikey: "y70XpCrGPmUxseyIlWie9L8KTfwYmChA0hJpMFTx_6A",
});

// Obtain the default map types from the platform object:
const defaultLayers = platform.createDefaultLayers();

// Instantiate (and display) a map:
const map = new H.Map(
  document.getElementById("map"),
  // Center the map on Dublin, Republic of Ireland, with the zoom level of 10:
  defaultLayers.vector.normal.map,
  {
    zoom: 11,
    center: {
      lat: 40.3083382,
      lng: -74.0697479,
    },
  }
);

// MapEvents enables the event system.
// The behavior variable implements default interactions for pan/zoom (also on mobile touch environments).
const behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

// Step 5: Add the traffic overlay to the map
map.addLayer(defaultLayers.vector.traffic.map);

// Enable dynamic resizing of the map, based on the current size of the enclosing cntainer
window.addEventListener("resize", () => map.getViewPort().resize());

// add neherdata coordinates
const neherdataCoordinates = {
  lat: 40.3083382,
  lng: -74.0697479,
};

// Create the HTML content for the info bubble
const content = "<div>" + "<h3>Neher Data Systems</h3>" + '<p>Learn more at <a href="https://www.neherdata.com/" target="_blank">Neher Data Systems</a>.</p>' + "</div>";

// Create an info bubble at the Neher Data Systems location with the HTML content
const infoBubble = new H.ui.InfoBubble(neherdataCoordinates, {
  content,
});

// Add the info bubble to the UI
ui.addBubble(infoBubble);
