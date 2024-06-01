// src/Components/CardContainer.js
import React from 'react';
import PlantCard from './PlantCard';
import '../StyleSheets/ComponentsCss/CardContainer.css';

function CardContainer({ plants }) {
  return (
    <div className="CardContainer">
      {plants.map((plant) => (
        <PlantCard key={plant._id} plant={plant} />
      ))}
    </div>
  );
}

export default CardContainer;
