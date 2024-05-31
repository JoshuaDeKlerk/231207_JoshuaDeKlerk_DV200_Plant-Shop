// src/Pages/Dashboard.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    const fetchPlants = async () => {
      try {
        const response = await axios.get('/plants');
        setPlants(response.data);
      } catch (error) {
        toast.error('Failed to fetch plants');
      }
    };

    fetchPlants();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/plants/delete/${id}`);
      setPlants(plants.filter((plant) => plant._id !== id));
      toast.success('Plant deleted successfully');
    } catch (error) {
      toast.error('Failed to delete plant');
    }
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <button onClick={() => navigate('/AddPlant')}>Add Plant</button>
      <div>
        {plants.map((plant) => (
          <div key={plant._id}>
            <h3>{plant.name}</h3>
            <p>{plant.description}</p>
            <p>{plant.price}</p>
            {plant.imageUrl && <img src={plant.imageUrl} alt={plant.name} />}
            <button onClick={() => navigate(`/EditPlant/${plant._id}`)}>Edit</button>
            <button onClick={() => handleDelete(plant._id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
