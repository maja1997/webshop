import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

function MapContainer({
  google, zoom, position, containerStyle,
}) {
  return (
    <Map
      google={google}
      zoom={zoom}
      initialCenter={position}
      containerStyle={containerStyle}
    >
      <Marker position={position} />
    </Map>
  );
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
})(MapContainer);
