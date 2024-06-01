// src/Pages/MyPlants.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../Components/NavBar';
import SearchAndSortContainer from '../Components/SearchAndSortMyPlants';
import CardContainerMyPlants from '../Components/CardContainerMyPlants';
import MyPlantsPagination from '../Components/PaginationMyPlants';
import { useNavigate } from 'react-router-dom';
import '../StyleSheets/PagesCSS/MyPlants.css';

function MyPlants() {
  const [plants, setPlants] = useState([]);
  const [filteredPlants, setFilteredPlants] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const plantsPerPage = 6;
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPlants = async () => {
      try {
        const response = await axios.get('/plants/my-plants');
        setPlants(response.data);
        setFilteredPlants(response.data);
      } catch (error) {
        console.error('Error fetching plants:', error);
      }
    };

    fetchPlants();
  }, []);

  const handleSearch = (searchTerm) => {
    const filtered = plants.filter((plant) =>
      plant.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPlants(filtered);
    setCurrentPage(1);
  };

  const handleSort = (sortOption) => {
    const sorted = [...filteredPlants].sort((a, b) => {
      if (sortOption === 'name') {
        return a.name.localeCompare(b.name);
      } else if (sortOption === 'price') {
        return a.price - b.price;
      }
      return 0;
    });
    setFilteredPlants(sorted);
  };

  const handleEdit = (id) => {
    navigate(`/edit-plant/${id}`); // Ensure this matches the URL pattern
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/plants/${id}`);
      setPlants(plants.filter((plant) => plant._id !== id));
      setFilteredPlants(filteredPlants.filter((plant) => plant._id !== id));
    } catch (error) {
      console.error('Error deleting plant:', error);
    }
  };

  // Pagination logic
  const totalPlants = filteredPlants.length;
  const totalPages = Math.ceil(totalPlants / plantsPerPage);
  const indexOfLastPlant = currentPage * plantsPerPage;
  const indexOfFirstPlant = indexOfLastPlant - plantsPerPage;
  const currentPlants = filteredPlants.slice(indexOfFirstPlant, indexOfLastPlant);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className='MyPlants'>
      <Navbar />
      <div className="MyPlantsSection">
        <div className='TopSection'>
          <SearchAndSortContainer onSearch={handleSearch} onSort={handleSort} />
          <div className="AddPlantsContainer">
            <button onClick={() => navigate('/AddPlant')}>Add Plant</button>
          </div>
        </div>
        <div className="PlantsCardsContainer">
          <CardContainerMyPlants plants={currentPlants} onEdit={handleEdit} onDelete={handleDelete} />
        </div>
        <div className="PaginationCont">
          <MyPlantsPagination
            currentPage={currentPage}
            totalPages={totalPages}
            paginate={paginate}
          />
        </div>
      </div>
    </div>
  );
}

export default MyPlants;
