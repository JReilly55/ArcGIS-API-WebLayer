require(["esri/Map", "esri/views/MapView", "esri/layers/FeatureLayer"], function (Map, MapView, FeatureLayer) {
        var map = new Map({
          basemap: "topo-vector"
        });

        var view = new MapView({
          container: "viewDiv",
          map: map,
          zoom: 4,
          center: [-95.7129, 37.0902] // longitude, latitude
        });
  
 var featureLayer_1 = new FeatureLayer({
  url: "https://services7.arcgis.com/FGr1D95XCGALKXqM/arcgis/rest/services/CrudeOil_Pipelines_US_EIA/FeatureServer"
});
map.add(featureLayer_1);

var featureLayer_2 = new FeatureLayer({
  url: "https://services7.arcgis.com/FGr1D95XCGALKXqM/arcgis/rest/services/CrudeOil_RailTerminals_US_EIA/FeatureServer"
});
map.add(featureLayer_2);
      });
