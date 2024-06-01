// src/Pages/PlantDetails.js
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../Components/NavBar';
import '../StyleSheets/PagesCSS/PlantDetails.css'; 


function PlantDetails() {
  const { id } = useParams();
  const [plant, setPlant] = useState(null);

  useEffect(() => {
    const fetchPlant = async () => {
      try {
        const response = await axios.get(`/plants/${id}`);
        setPlant(response.data);
      } catch (error) {
        console.error('Error fetching plant:', error);
      }
    };

    fetchPlant();
  }, [id]);

  const handleBuyNow = () => {
    alert('Successfully bought');
  };

  if (!plant) {
    return <div>Loading...</div>;
  }

  return (
    <div className='PlantDetails'>
      <Navbar />
      <div className='PlantDetailsContent'>
        <div className="PlantDetailsCard">
          <div className="imgContainer">
            <img src={plant.imageUrl} alt={plant.name} className='PlantDetailsImage' />
          </div>
          <div className="PlantInfo">
            <div className="PlantDetailsText">
              <h2 className='PlantDetailsName'>{plant.name}</h2>
              <p className='PlantDetailsDescription'>{plant.description}</p>
              <p className='PlantDetailsPrice'>${plant.price.toFixed(2)}</p>
            </div>
            <div className="buttonContainer">
              <button onClick={handleBuyNow} className='BuyNowButton'>Buy Now</button>
              <Link to={"/Browse"} className="BrowseButton">
                Back To Browse
              </Link>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default PlantDetails;
