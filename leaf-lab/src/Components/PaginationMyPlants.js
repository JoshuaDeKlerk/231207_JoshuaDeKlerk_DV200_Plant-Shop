// src/Components/MyPlantsPagination.js
import React from 'react';
import '../StyleSheets/ComponentsCss/Pagination.css';

const MyPlantsPagination = ({ currentPage, totalPages, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className='PaginationCont'>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className={`page-item ${currentPage === number ? 'active' : ''}`}>
            <button onClick={() => paginate(number)} className="page-link" type="button">
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MyPlantsPagination;