// src/components/EditPlant.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useNavigate, useParams, Link } from 'react-router-dom';
import '../StyleSheets/PagesCSS/AddPlant.css';

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
        navigate('/MyPlants');
      }
    } catch (error) {
      toast.error('Failed to update plant');
    }
  };

  return (
    <div className='PlantContainer'>
      <div className="PlantContent">
        <div className="PlantImgCont">
          {plant.imageUrl && <img src={plant.imageUrl} alt="Plant" className="preview-image" />}
          <div className='IconAdd'></div>
        </div>

        <form onSubmit={handleSubmit} className="PlantForm">
          <h2>Edit Plant</h2>

          <input type="text" name="name" className="input-field" placeholder='Plant Name' value={plant.name} onChange={handleChange} required />

          <textarea className="input-field-description" placeholder='Plant Description' name="description" value={plant.description} onChange={handleChange} required />

          <input type="number" className="input-field" placeholder='Price' name="price" value={plant.price} onChange={handleChange} required />

          <input type="text" className="input-field" placeholder='Image URL' name="imageUrl" value={plant.imageUrl} onChange={handleChange} />

          <button type="submit">Update Plant</button>

          <div className="CancelButton">
            <Link to={"/MyPlants"} className='FormButton1'>Cancel</Link>
          </div>

        </form>
      
      
      
      

      </div>
    </div>
  );
};

export default EditPlant;
