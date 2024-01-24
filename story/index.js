// https://developers.google.com/maps/documentation/javascript/dds-boundaries/choropleth-map#try-sample

async function initMap() {
  // Request needed libraries.
  const { Map } = await google.maps.importLibrary("maps");
  const map = new Map(document.getElementById("map"), {
    center: { lat: 27.81, lng: 84.82 },
    zoom: 7,

    // "Administrative Area Level 1" means the map tragets the states, province or region on feature layer.
    //mapId: "7ba16be0c9375fa7",
  });
  const featureLayer = map.getFeatureLayer(
    google.maps.FeatureType.ADMINISTRATIVE_AREA_LEVEL_1,
  );

  // stat maps_boundaries_choropleth_style_function
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

  // towercount by state of nepal data obtained from https://en.wikipedia.org/wiki/Provinces_of_Nepal
  const states = {
    "ChIJJTMWst7W6DkRYeNF5qo7HsY": 300, //Koshi province
    "ChIJ3VcY0zB-7DkR4ZeNT1Gt-QQ": 150, //Madesh Province
    "ChIJ_wJv86_i6jkRESgJiF7pmkQ": 450, //Bagmati province
    "ChIJC8-58DxxlTkRKb2YyXiycPo": 350, //Gandaki province
    "ChIJgQJOSit5ljkR6lK-Oz3cNcg": 200, //Lumbini province
    "ChIJlSRJE2TGvDkRAFmPDaDubQY": 190, //Karnali province
    "ChIJm4QKVy1ZoTkR6IGi80pLKog": 400, //Suderpashchim province
  };
}

initMap();
