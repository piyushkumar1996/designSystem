import React, { useEffect } from "react";
import './search.css';

const SearchBox = ({ searchTerm, setSearchTerm, onSearch, setLoading }) => {

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    setLoading(true);
  };

  useEffect(() => {
    onSearch(searchTerm);
  }, [searchTerm]);


  return (
    <div>
      <input
        type="text"
        placeholder="type here"
        value={searchTerm}
        onChange={handleChange}
        className="searchBox"
      />
    </div>
  );
};

export default SearchBox;
