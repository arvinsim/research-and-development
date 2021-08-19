import React from "react";

function PhotographyMap() {
  return (
    <div>
      <h1>Photography Map</h1>
      <div id="photography-map"></div>
    </div>
  );
}

const locationsMarkers = [
  {
    name: "Labrador Park",
    lat: 1.2667528884241017,
    long: 103.802820878488,
  },
  {
    name: "Marina Barrage",
    lat: 1.281119063584918,
    long: 103.87410672901598,
  },
  {
    name: "Lower Peirce Reservoir",
    lat: 1.3702173441083043,
    long: 103.82572641732168,
  },
];

export default PhotographyMap;
