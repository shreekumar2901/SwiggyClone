import { useEffect, useState } from "react";

const Search = ({ onFiltersChange }) => {
  const [filters, setFilters] = useState({
    topRated: false,
    budgetFriendly: false,
    fastDelivery: false,
    searchText: "",
  });

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    onFiltersChange(filters);
  }, [filters]);

  const changeFilter = (filterName) => {
    if (filterName === "searchText") {
      setFilters((prev) => {
        const next = { ...prev, searchText: searchText };
        return next;
      });
      return;
    }
    setFilters((prev) => {
      const next = { ...prev, [filterName]: !prev[filterName] };
      return next;
    });
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search restaurants..."
        className="search-input"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        onKeyDown={(e) => {
          if (e.key == "Enter") changeFilter("searchText");
        }}
      />
      <div className="search-actions">
        <button
          className="search-button"
          type="button"
          onClick={() => changeFilter("searchText")}
        >
          Search
        </button>
        <details className="filter-dropdown">
          <summary className="filter-button">
            Filters <span className="filter-chevron">▾</span>
          </summary>
          <div className="filter-menu">
            <button
              className={`filter-item${
                filters.topRated ? " filter-item-active" : ""
              }`}
              type="button"
              data-filter="top-rated"
              onClick={() => changeFilter("topRated")}
            >
              Top Rated Restaurants
            </button>
            <button
              className={`filter-item${
                filters.budgetFriendly ? " filter-item-active" : ""
              }`}
              type="button"
              data-filter="budget"
              onClick={() => changeFilter("budgetFriendly")}
            >
              Budget Friendly
            </button>
            <button
              className={`filter-item${
                filters.fastDelivery ? " filter-item-active" : ""
              }`}
              type="button"
              data-filter="fast-delivery"
              onClick={() => changeFilter("fastDelivery")}
            >
              Fast Delivery
            </button>
          </div>
        </details>
      </div>
    </div>
  );
};

export default Search;
