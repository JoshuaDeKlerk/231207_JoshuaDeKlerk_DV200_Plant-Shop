// src/components/EditPlant.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';

const EditPlant = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [plant, setPlant] = useState({
    name: '',
    description: '',
    price: '',
    imageUrl: ''
  });

  useEffect(() => {
    const fetchPlant = async () => {
      try {
        const response = await axios.get(`/plants/${id}`);
        setPlant(response.data);
      } catch (error) {
        toast.error('Failed to fetch plant');
      }
    };

    fetchPlant();
  }, [id]);

  const handleChange = (e) => {
    setPlant({ ...plant, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`/plants/edit/${id}`, plant);
      if (response.status === 200) {
        toast.success('Plant updated successfully!');
        navigate('/Dashboard');
      }
    } catch (error) {
      toast.error('Failed to update plant');
    }
  };

  return (
    <div>
      <h2>Edit Plant</h2>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input type="text" name="name" value={plant.name} onChange={handleChange} required />
        <label>Description</label>
        <input type="text" name="description" value={plant.description} onChange={handleChange} required />
        <label>Price</label>
        <input type="number" name="price" value={plant.price} onChange={handleChange} required />
        <label>Image URL</label>
        <input type="text" name="imageUrl" value={plant.imageUrl} onChange={handleChange} />
        <button type="submit">Update Plant</button>
      </form>
    </div>
  );
};

export default EditPlant;
