import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import parksData from '../data/parksData.json'; 

function ParkDetails() {
  const { id } = useParams();
  const navigate = useNavigate(); 
  const park = parksData.find((park) => park.id === parseInt(id));

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <div className="p-6">
          <h1 className="text-3xl font-bold text-green-800 mb-4">{park.name}</h1>
          <ul className="list-disc list-inside space-y-4 text-gray-700 mb-6">
            <li className="text-lg">
              <span className="font-semibold">Fun Fact:</span> {park.funFact}
            </li>
            <li className="text-lg">
              <span className="font-semibold">Description:</span> {park.description}
            </li>
            <li className="text-lg">
              <span className="font-semibold">Location:</span> {park.latitude}, {park.longitude}
            </li>
          </ul>
          <button
            onClick={() => navigate('/')}
            className="inline-block px-4 py-2 bg-transparent border border-gray-300 text-gray-500 rounded-md text-sm hover:bg-gray-100 hover:text-gray-700"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}

export default ParkDetails;
