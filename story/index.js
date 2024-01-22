// https://developers.google.com/maps/documentation/javascript/dds-boundaries/choropleth-map#try-sample

async function initMap() {
  // Request needed libraries.
  const { Map } = await google.maps.importLibrary("maps");
  const map = new Map(document.getElementById("map"), {
    center: { lat: 27.81, lng: 84.82 },
    zoom: 7,

    // "Administrative Area Level 1" means the map tragets the states, province or region on feature layer.
    mapId: "7ba16be0c9375fa7",
  });
  const featureLayer = map.getFeatureLayer(
    google.maps.FeatureType.ADMINISTRATIVE_AREA_LEVEL_1,
  );

  // stat maps_boundaries_choropleth_style_function
  featureLayer.style = (featureStyleFunctionOptions) => {
    const placeFeature = featureStyleFunctionOptions.feature;
    const gdppercapita = states[placeFeature.placeId];
    let fillColor;

    // Specify colors using any of the following:
    // * Named ('green')
    // * Hexadecimal ('#FF0000')
    // * RGB ('rgb(0, 0, 255)')
    // * HSL ('hsl(60, 100%, 50%)')
    if (gdppercapita < 1000) {
      fillColor = "#FF0000";
    } else if (gdppercapita < 1100) {
      fillColor = "#87CEEB";  
    } else if (gdppercapita < 1200) {
      fillColor = "#FFA500";
    } else if (gdppercapita < 1300) {
      fillColor = "#0000F";
    } else if (gdppercapita < 1500) {
      fillColor = "#90EE90";
    } else if (gdppercapita < 3000) {
      fillColor = "#023020";
    }
    return {
      fillColor,
      fillOpacity: 0.7,
    };
  };

  // gdppercapita data by state of nepal data obtained from https://en.wikipedia.org/wiki/Provinces_of_Nepal
  const states = {
    "ChIJJTMWst7W6DkRYeNF5qo7HsY": 1298, //KOshi province
    "ChIJ3VcY0zB-7DkR4ZeNT1Gt-QQ": 882, //Madesh Province
    "ChIJ_wJv86_i6jkRESgJiF7pmkQ": 2640, //Bagmati province
    "ChIJC8-58DxxlTkRKb2YyXiycPo": 1348, //Gandaki province
    "ChIJgQJOSit5ljkR6lK-Oz3cNcg": 1209, //Lumbini province
    "ChIJlSRJE2TGvDkRAFmPDaDubQY": 1043, //Karnali province
    "ChIJm4QKVy1ZoTkR6IGi80pLKog": 1135, //Suderpashchim province
  };
}

initMap();
