// src/Components/SearchAndSortContainer.js
import React, { useState } from 'react';
import '../StyleSheets/ComponentsCss/SearchAndSort.css';

function SearchAndSortContainer({ onSearch, onSort }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('name');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  const handleSort = (e) => {
    setSortOption(e.target.value);
    onSort(e.target.value);
  };

  return (
    <div className="SearchAndSortContainer">
      <input
        type="text"
        placeholder="Search plants..."
        value={searchTerm}
        onChange={handleSearch}
        className="SearchInput"
      />
      <select value={sortOption} onChange={handleSort} className="SortSelect">
        <option value="name">Sort by Name</option>
        <option value="price">Sort by Price</option>
      </select>
    </div>
  );
}

export default SearchAndSortContainer;
