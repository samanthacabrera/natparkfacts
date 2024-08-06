import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-extra-markers/dist/css/leaflet.extra-markers.min.css'; // Import the CSS for extra markers
import L from 'leaflet'; 
import 'leaflet-extra-markers'; // Import leaflet-extra-markers functionality
import parksData from '../data/parksData.json';
import ParkMarker from './ParkMarker'; // Import the ParkMarker component

// Leaflet icon fix
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

function Home() {
  return (
    <div className="flex flex-col h-screen bg-gray-50">
      <header className="bg-green-800 text-white text-center py-8 flex-shrink-0 relative">
        <h1 className="text-4xl font-bold mb-2">National Park Fun Facts</h1>
        <p className="text-lg mb-4">Discover interesting facts about national parks across the United States.</p>
        <div className="text-gray-300 text-sm">
          <a 
            href="https://www.nationalparks.org" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-gray-50"
          >
            Learn more
          </a>
          {' | '}
          <a 
            href="https://github.com/samanthacabrera/natparkfacts" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-gray-50"
          >
            Contribute
          </a>
        </div>
      </header>
      <main className="flex-grow">
        <MapContainer
          center={[37.0902, -95.7129]}
          zoom={4}
          style={{ height: '100%', width: '100%' }}
          maxBounds={[
            [24.396308, -125.0], // Southwest coordinates
            [49.384358, -66.93457] // Northeast coordinates
          ]}
          maxBoundsViscosity={1.0}
          minZoom={3}
          maxZoom={10}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {parksData.map((park) => (
            <ParkMarker
              key={park.id}
              park={park}
            />
          ))}
        </MapContainer>
      </main>
    </div>
  );
}

export default Home;
