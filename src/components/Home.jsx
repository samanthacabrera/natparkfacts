import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import parksData from '../data/parksData.json'; 
import L from 'leaflet'; 

// Leaflet icon fix
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

function Home() {
  return (
    <div className="flex flex-col h-screen">
      <header className="bg-forest-green text-gray-50 text-center py-12 flex-shrink-0 relative">
        <h1 className="text-5xl mb-2">
          National Park Fun Facts
        </h1>
        <p className="text-xl font-light mb-4">
          Discover interesting facts about national parks across the United States.
        </p>
        <div className="text-gray-200 text-sm">
          <a 
            href="https://www.nationalparks.org" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:underline"
          >
            learn more
          </a>
          {' | '}
          <a 
            href="https://github.com/your-github-username" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:underline"
          >
           contribute
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
            <Marker key={park.id} position={[park.latitude, park.longitude]}>
              <Popup>
                <strong className="text-lg font-semibold">{park.name}</strong>
                <br />
                {park.funFact}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </main>
    </div>
  );
}

export default Home;
