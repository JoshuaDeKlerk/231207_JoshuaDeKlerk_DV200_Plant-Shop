// src/components/AddPlant.js
import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

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
    <div>
      <h2>Add Plant</h2>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input type="text" name="name" value={plant.name} onChange={handleChange} required />
        <label>Description</label>
        <input type="text" name="description" value={plant.description} onChange={handleChange} required />
        <label>Price</label>
        <input type="number" name="price" value={plant.price} onChange={handleChange} required />
        <label>Image URL</label>
        <input type="text" name="imageUrl" value={plant.imageUrl} onChange={handleChange} />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
};

export default AddPlant;
