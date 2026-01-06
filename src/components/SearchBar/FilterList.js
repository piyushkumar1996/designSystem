import React from "react";
import "./search.css";

const FilterList = ({ filterlist, isLoading, searchTerm }) => {
  return (
    <div
      className={`result_container ${filterlist.length ? "show_result" : ""}`}
    >
      {/* Loading state */}
      {isLoading && searchTerm && <p>Loading list.....</p>}

      {/* Zero-result page */}
      {!filterlist.length && searchTerm && !isLoading && <p>No result found</p>}

      {/* Actual list */}
      {!isLoading &&
        filterlist.map((item) => (
          <div className="result_item" key={item.id}>
            {item.name}
          </div>
        ))}
    </div>
  );
};

export default FilterList;
