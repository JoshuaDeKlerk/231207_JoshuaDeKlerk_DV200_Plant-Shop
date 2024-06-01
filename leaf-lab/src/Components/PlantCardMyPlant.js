// src/Components/PlantCardMyPlant.js
import React from 'react';
import '../StyleSheets/ComponentsCss/PlantCardMyPlant.css';

function PlantCardMyPlant({ plant, onEdit, onDelete }) {
  return (
    <div className="PlantCardMyPlant">
      <img src={plant.imageUrl} alt={plant.name} className="PlantCardImage" />
      <div className="PlantCardTextMyPlant">
        <h3 className="PlantCardName">{plant.name}</h3>
        <p className="PlantCardDescription">{plant.description}</p>
        <p className="PlantCardPriceMyPlants">Price: ${plant.price}</p>
      </div>
      <div className="PlantOptions">
        <button onClick={() => onEdit(plant._id)}>Edit</button>
        <button onClick={() => onDelete(plant._id)}>Delete</button>
      </div>
    </div>
  );
}

export default PlantCardMyPlant;
