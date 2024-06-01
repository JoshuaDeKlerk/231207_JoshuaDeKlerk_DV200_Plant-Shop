// src/components/AddPlant.js
import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useNavigate, Link } from 'react-router-dom';
import '../StyleSheets/PagesCSS/AddPlant.css'; 

const AddPlant = () => {
  const navigate = useNavigate();
  const [plant, setPlant] = useState({
    name: '',
    description: '',
    price: '',
    imageUrl: ''
  });

  const handleChange = (e) => {
    setPlant({ ...plant, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/plants/add', plant, {
        withCredentials: true // Ensure cookies (including the token) are sent with the request
      });
      if (response.status === 201) {
        toast.success('Plant added successfully!');
        navigate('/MyPlants');
      }
    } catch (error) {
      console.error("Error adding plant:", error.response.data); // Log the error response data
      toast.error('Failed to add plant');
    }
  };

  return (
    <div className="PlantContainer">
      <div className="PlantContent">
        <div className="PlantImgCont">
          {plant.imageUrl && <img src={plant.imageUrl} alt="Plant" className="preview-image" />}
          <div className='IconAdd'></div>
        </div>
        
        <form onSubmit={handleSubmit} className="PlantForm">
          <h2>Add Plant</h2>
          <input type="text" className="input-field" placeholder='Plant Name' name="name" value={plant.name} onChange={handleChange} required />
          <textarea className="input-field-description" placeholder='Plant Description' name="description" value={plant.description} onChange={handleChange} required />
          <input type="number" className="input-field" placeholder='Price' name="price" value={plant.price} onChange={handleChange} required />
          <input type="text" className="input-field" placeholder='Image URL' name="imageUrl" value={plant.imageUrl} onChange={handleChange} />
          
          <button type="submit" className="FormButton">Add Plant</button>
          <div className="CancelButton">
            <Link to={"/MyPlants"} className='FormButton1'>Cancel</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPlant;
