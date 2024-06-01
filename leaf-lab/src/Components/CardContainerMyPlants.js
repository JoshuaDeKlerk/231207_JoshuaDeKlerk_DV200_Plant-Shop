// src/Components/CardContainerMyPlants.js
import React from 'react';
import PlantCardMyPlant from './PlantCardMyPlant';
import '../StyleSheets/ComponentsCss/CardContainerMyPlants.css';

const CardContainerMyPlants = ({ plants, onEdit, onDelete }) => {
  return (
    <div className="CardContainerMyPlants">
      {plants.map((plant) => (
        <PlantCardMyPlant key={plant._id} plant={plant} onEdit={onEdit} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default CardContainerMyPlants;
