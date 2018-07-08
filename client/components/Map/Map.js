import React from 'react';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps';

const Map = withScriptjs(withGoogleMap(({ lat, lng }) => {
  return (
    <GoogleMap
      defaultZoom={12}
      defaultCenter={{ lat, lng }}
    >
      <Marker
        position={{ lat, lng }}
      />
    </GoogleMap>
  );
}));

export default Map;
