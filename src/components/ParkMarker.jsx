import React from 'react';
import { Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { 
  faMountain, 
  faTree, 
  faWater, 
  faDroplet, 
  faWaveSquare, 
  faSun, 
  faSnowflake, 
  faMountainSun, 
  faFish, 
  faCampground 
} from '@fortawesome/free-solid-svg-icons'; // Import additional icons

const iconMap = {
  'waterfall': faWater, // Waterfalls
  'canyon': faMountain, // Canyons
  'cliff': faTree, // Cliffs
  'arch': faDroplet, // Water-related features
  'snow': faSnowflake, // Snow-covered areas
  'sun': faSun, // Sunny areas
  'star': faSun, // Stargazing locations
  'campground': faCampground, // Campgrounds
  'hiking': faMountainSun, // Hiking trails
  'biking': faMountain, // Biking trails (use mountain icon)
  'fish': faFish, // Water features with fish
  'forest': faTree, // Forests
  'peak': faMountain, // Peaks
};

function ParkMarker({ park }) {
  const getIcon = (park) => {
    const iconName = park.icon || 'forest';
    const icon = iconMap[iconName] || faTree; 

    return L.divIcon({
      className: 'custom-icon',
      html: `<span class="fa fa-${icon.iconName}" aria-hidden="true"></span>`,
      iconSize: [32, 32],
      iconAnchor: [16, 32],
      popupAnchor: [0, -32]
    });
  };

  return (
    <Marker
      position={[park.latitude, park.longitude]}
      icon={getIcon(park)}
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
