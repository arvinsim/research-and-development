import React from "react";
import { Helmet } from "react-helmet";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

function PhotographyMap() {
  return (
    <div>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
          integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
          crossOrigin=""
        />
      </Helmet>
      <h1>Photography Map</h1>
      <div id="photography-map">
        <MapContainer
          width={800}
          height={600}
          center={[51.505, -0.09]}
          zoom={13}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[51.505, -0.09]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
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
