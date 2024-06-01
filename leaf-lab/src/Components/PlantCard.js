// src/Components/PlantCard.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../StyleSheets/ComponentsCss/PlantCard.css';

function PlantCard({ plant }) {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/plants/${plant._id}`);
  };

  return (
    <div className="PlantCard" onClick={handleCardClick}>
      <img src={plant.imageUrl} alt={plant.name} className="PlantCardImage" />
      <div className="PlantCardText">
        <div className="PlantNameAndDescription">
          <h3 className="PlantCardName">{plant.name}</h3>
          <p className="PlantCardDescription">{plant.description}</p>
        </div>
        <div className="PlantPriceContainer">
          <p className="PlantCardPrice">R{plant.price.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
}

export default PlantCard;
