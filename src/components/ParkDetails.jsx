import React from 'react';
import { useParams } from 'react-router-dom';
import parksData from '../data/parksData.json'; // Example data

function ParkDetails() {
  const { id } = useParams();
  const park = parksData.find((park) => park.id === parseInt(id));

  return (
    <div>
      <h1>{park.name}</h1>
      <p>{park.funFact}</p>
      <p>{park.description}</p>
    </div>
  );
}

export default ParkDetails;
