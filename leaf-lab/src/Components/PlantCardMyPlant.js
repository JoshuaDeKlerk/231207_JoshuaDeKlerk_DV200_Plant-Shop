// src/Components/PlantCardMyPlant.js
import React from 'react';
import '../StyleSheets/ComponentsCss/PlantCardMyPlant.css';

function PlantCardMyPlant({ plant, onEdit, onDelete }) {
  return (
    <div className="PlantCardMyPlant">
      <img src={plant.imageUrl} alt={plant.name} className="PlantCardImageMyPlant" />
      <div className="PlantCardTextMyPlant">
        <h3 className="PlantCardName">{plant.name}</h3>
        <p className="PlantCardDescription">{plant.description}</p>
        <p className="PlantCardPriceMyPlants">R {plant.price}</p>
      </div>
      <div className="PlantOptions">
        <button onClick={() => onEdit(plant._id)} className="ButtonsEditDelete">Edit</button>
        <button onClick={() => onDelete(plant._id)} className="ButtonsEditDelete">Delete</button>
      </div>
    </div>
  );
}

export default PlantCardMyPlant;
