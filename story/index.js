// https://developers.google.com/maps/documentation/javascript/dds-boundaries/choropleth-map#try-sample
// This example displays a marker at the head office of China communication service International Nepal.
// When the user clicks the marker, an info window opens.

function initMap() {
  // Request needed Libraries
  const center = { lat: 27.72, lng: 85.33 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 7,
    center: center,

    // "Administrative Area Level 1" means the map tragets the states, province or region on feature layer.
    mapId: "7ba16be0c9375fa7",
  });
  const featureLayer = map.getFeatureLayer(
    google.maps.FeatureType.ADMINISTRATIVE_AREA_LEVEL_1,
  );

  // Starts map_boundarries_choropleth_style_function
  featureLayer.style = (featureStyleFunctionOptions) => {
    const placeFeature = featureStyleFunctionOptions.feature;
    const towercount = states[placeFeature.placeId];
    let fillColor;

    // Specify colors using any of the following:
    // * Named ('green')
    // * Hexadecimal ('#FF0000')
    // * RGB ('rgb(0, 0, 255)')
    // * HSL ('hsl(60, 100%, 50%)')
    if (towercount < 200) {
      fillColor = "#58CCED";
    } else if (towercount < 300) {
      fillColor = "#3895D3";
    } else if (towercount < 400) {
      fillColor = "#1261A0";
    } else if (towercount < 500) {
      fillColor = "#072F5F";
    }
    return {
      fillColor,
      fillOpacity: 0.5,
    };
  };
  
  // towercount by state of nepal supervised by me

  const states = {
    "ChIJJTMWst7W6DkRYeNF5qo7HsY": 300, // Koshi Province
    "ChIJ3VcY0zB-7DkR4ZeNT1Gt-QQ": 150, // Madesh Province
    "ChIJ_wJv86_i6jkRESgJiF7pmkQ": 450, // Bagmati Province
    "ChIJC8-58DxxlTkRKb2YyXiycPo": 350, // Gandaki Province
    "ChIJgQJOSit5ljkR6lK-Oz3cNcg": 200, // Lumbini Province
    "ChIJlSRJE2TGvDkRAFmPDaDubQY": 190, // Karnali Province
    "ChIJm4QKVy1ZoTkR6IGi80pLKog": 400, // Suderpaschim Province
    
    }
    
  const contentString =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">China Communication Service</h1>' +
    '<div id="bodyContent">' +
    "<p><b>China Communication Service</b>, head office located at Kalika Tower " +
    "Kathmandu</p>" +
    '<p>Attribution: China Com Service <a href="https://en.wikipedia.org/wiki/China_Communications_Services">' +
    "https://en.wikipedia.org/wiki/China_Communications_Servicestitle=China Com Service</a> " +

    "</div>" +
    "</div>";
  const infowindow = new google.maps.InfoWindow({
    content: contentString,
    ariaLabel: "center",
  });
  const marker = new google.maps.Marker({
    position: center,
    map,
    title: "center (Ayers Rock)",
  });

  marker.addListener("click", () => {
    infowindow.open({
      anchor: marker,
      map,
    });
  });
}

window.initMap = initMap;
