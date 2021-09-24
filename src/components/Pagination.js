import React from "react";

function Pagination({ currentPage, perPage, total, paginate }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(total / perPage); i++) {
    pageNumbers.push(i);
  }

  function getStartAndEnd() {
    let lastUserIndex = currentPage * perPage;
    const firstUserIndex = lastUserIndex - perPage + 1;
    lastUserIndex = lastUserIndex >= total ? total : lastUserIndex;
    return { firstUserIndex, lastUserIndex };
  }

  if (total <= perPage) return null;

  return (
    <div className='pt-2 d-flex align-items-center'>
      <ul className='pagination mb-0' style={{ cursor: "pointer" }}>
        <li className={`page-item mx-1 ${currentPage > 1 ? "" : "disabled"}`}>
          <button
            className='page-link'
            onClick={() => paginate(currentPage - 1)}
          >
            &laquo;
          </button>
        </li>
        {pageNumbers.map((n) => (
          <li
            className={`page-item mx-1 ${n === currentPage ? "active" : ""}`}
            key={n}
          >
            <button onClick={() => paginate(n)} className='page-link'>
              {n}
            </button>
          </li>
        ))}
        <li
          className={`page-item mx-1 ${
            currentPage === pageNumbers.length ? "disabled" : ""
          }`}
        >
          <button
            onClick={() => paginate(currentPage + 1)}
            className='page-link'
          >
            &raquo;
          </button>
        </li>
      </ul>
      <small className='mb-0'>
        Showing {getStartAndEnd().firstUserIndex} to{" "}
        {getStartAndEnd().lastUserIndex} of&nbsp; {total} items.
      </small>
    </div>
  );
}

export default Pagination;
