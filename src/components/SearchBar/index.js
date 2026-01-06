import React, { useCallback, useState } from "react";
import SearchBox from "./SearchBox";
import FilterList from "./FilterList";

const items = Array.from({ length: 1200 }).map((_, i) => ({
  id: i,
  name: `Item ${i} ${["apple", "banana", "orange", "grape", "mango"][i % 5]}`,
}));

const debounce = (fn, delay = 300) => {
  let timer = null;
  return (...args) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterlist, setFilterList] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const onSearch = useCallback(
    debounce((query) => {
      if (!query.trim()) {
        setFilterList([]);
        setLoading(false);
        return;
      }

      setTimeout(() => {
        setFilterList(
          items.filter((item) =>
            item.name.toLowerCase().includes(query.toLowerCase())
          )
        );
        setLoading(false);
      }, 500);
    }, 300),
    []
  );

  return (
    <div style={{ margin: "40px auto" }}>
      <SearchBox
        onSearch={onSearch}
        setSearchTerm={setSearchTerm}
        searchTerm={searchTerm}
        setLoading={setLoading}
      />
      <FilterList
        filterlist={filterlist}
        isLoading={isLoading}
        searchTerm={searchTerm}
      />
    </div>
  );
};

export default SearchBar;
