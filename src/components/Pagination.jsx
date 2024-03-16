const Pagination = ({
  currentPage,
  totalPages,
  goToPreviousPage,
  goToNextPage,
}) => {
  if (totalPages <= 1) return null;
  return (
    <div>
      <button onClick={goToPreviousPage} disabled={currentPage === 1}>
        {"<"}
      </button>
      <span>
        {currentPage} / {totalPages}
      </span>
      <button onClick={goToNextPage} disabled={currentPage === totalPages}>
        {">"}
      </button>
    </div>
  );
};

export default Pagination;
