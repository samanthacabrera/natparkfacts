import React from 'react';
import { Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

function ParkMarker({ park }) {
  const diamondIcon = L.divIcon({
    className: 'custom-diamond',
    html: '<div class="diamond"></div>',
    iconSize: [16, 16],
    iconAnchor: [8, 8],
    popupAnchor: [0, -8]
  });

  return (
    <Marker
      position={[park.latitude, park.longitude]}
      icon={diamondIcon}
    >
      <Popup>
        <strong className="text-lg font-semibold">{park.name}</strong>
        <br />
        Fun Fact: {park.funFact}
      </Popup>
    </Marker>
  );
}

export default ParkMarker;
