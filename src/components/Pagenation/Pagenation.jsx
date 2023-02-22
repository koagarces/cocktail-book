import React, { useState } from "react";

const Pagination = ({ totalPages, currentPage, setCurrentPage }) => {
  let numArr = [];

  const handleClick = (page) => {
    setCurrentPage(page);
    console.log(page);
  };

  for (let i = 1; i < totalPages + 1; i++) {
    numArr.push(i);
  }
  console.log(numArr);
  return (
    <div>
      {numArr.map((page) => (
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
};
//   return null;
// };

export default Pagination;
