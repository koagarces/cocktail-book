import React, { useState } from "react";

const Pagination = ({ totalPages, pageNeighbours = 2 }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handleClick = (page) => {
    setCurrentPage(page);
  };

  const totalNumbers = pageNeighbours * 2 + 3;
  const totalBlocks = totalNumbers + 2;
  if (totalPages > totalBlocks) {
    const startPage = Math.max(2, currentPage - pageNeighbours);
    const endPage = Math.min(totalPages - 1, currentPage + pageNeighbours);

    let pages = [...Array(endPage + 1 - startPage).keys()].map(
      (i) => startPage + i
    );

    pages = [1, ...pages, totalPages];
    return (
      <div>
        {pages.map((page) => (
          <button
            key={page}
            onClick={() => handleClick(page)}
            disabled={currentPage === page}
          >
            {page}
          </button>
        ))}
      </div>
    );
  }
  return null;
};

export default Pagination;
