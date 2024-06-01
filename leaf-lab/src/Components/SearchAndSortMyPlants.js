// src/Components/SearchAndSortContainer.js
import React, { useState } from 'react';
import '../StyleSheets/ComponentsCss/SearchAndSortMyPlants.css';

const SearchAndSortContainer = ({ onSearch, onSort }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  const handleSort = (e) => {
    onSort(e.target.value);
  };

  return (
    <div className="SearchAndSortContainerMyPlants">
      <input
        type="text"
        placeholder="Search plants"
        value={searchTerm}
        onChange={handleSearch}
        className="SearchInputMyPlants"
      />
      <select onChange={handleSort} className="SortSelectMyPlants">
        <option value="name">Sort by Name</option>
        <option value="price">Sort by Price</option>
      </select>
    </div>
  );
};

export default SearchAndSortContainer;
