import React, { useState } from "react";

function Pagination({ totalItems, itemsPerPage }) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const pageLinks = [];
  for (let i = 1; i <= totalPages; i++) {
    pageLinks.push(
      <button key={i} onClick={() => handlePageChange(i)}>
        {i}
      </button>
    );
  }

  return (
    <div className="border">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        &lsaquo;
      </button>
      {pageLinks}
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        &rsaquo;
      </button>
    </div>
  );
}

export default Pagination;
