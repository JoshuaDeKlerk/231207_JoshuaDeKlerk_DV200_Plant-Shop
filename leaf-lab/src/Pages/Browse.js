// src/Pages/Browse.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../Components/NavBar';
import SearchAndSortContainer from '../Components/SearchAndSort';
import CardContainer from '../Components/CardContainer';
import Pagination from '../Components/Pagination';
import '../StyleSheets/PagesCSS/Browse.css';

function Browse() {
  const [plants, setPlants] = useState([]);
  const [filteredPlants, setFilteredPlants] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const plantsPerPage = 12;

  useEffect(() => {
    const fetchPlants = async () => {
      try {
        const response = await axios.get('/plants');
        console.log(response.data); // Log fetched plants
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

  // Pagination logic
  const indexOfLastPlant = currentPage * plantsPerPage;
  const indexOfFirstPlant = indexOfLastPlant - plantsPerPage;
  const currentPlants = filteredPlants.slice(indexOfFirstPlant, indexOfLastPlant);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className='Browse'>
      <Navbar />
      <div className="BrowseContent">
        <div className="SearchAndSortCont">
          <SearchAndSortContainer onSearch={handleSearch} onSort={handleSort} />
        </div>
        <CardContainer plants={currentPlants} />
        <div className="PaginationContainer">
          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(filteredPlants.length / plantsPerPage)}
            paginate={paginate}
          />
        </div>
      </div>
    </div>
  );
}

export default Browse;
