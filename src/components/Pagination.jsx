import React from 'react';

const Pagination = ({ currentPage, totalResults, onPageChange }) => {

  const totalPages = Math.ceil(totalResults / 10);

  if (totalPages <= 1) return null;

  return (
    <div>
       <div className="flex justify-center my-4">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-4 py-2 mx-1 bg-gray-200 disabled:opacity-50"
      >
        Previous
      </button>
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-4 py-2 mx-1 bg-gray-200 disabled:opacity-50"
      >
        Next
      </button>
    </div>
    </div>
  );
};

export default Pagination;