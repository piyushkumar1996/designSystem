import React from "react";
import "./todo.css";

const options = ["all", "active", "completed"];

const TodoFilter = ({ dispatch, filter }) => {
  const handleFilterChange = (e) => {
    dispatch({ type: "FILTER_TODO", payload: { status: e.target.value } });
  };

  return (
    <div className="filterContainer">
      <label>Select Filter</label>
      <select onChange={handleFilterChange} value={filter}>
        {options.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default TodoFilter;
