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
    <div className="flex flex-wrap items-center gap-2.5 mt-4 mx-auto mb-3.5 px-[11px] py-4 max-w-[460px] w-[calc(100% - 32px)] bg-white border border-solid border-slate-900/8 rounded-xl shadow-[0_8px_18px_rgba(15,23,42,0.08)] transition-colors duration-200 ease-in-out focus-within:border-orange-500/50 focus-within:shadow-2xl focus-within:shadow-orange-500/18 placeholder:color-[#9ca3af]">
      <input
        className="flex-1 border-none outline-none text-[14px] text-[#1f2937] bg-transparent"
        type="text"
        placeholder="Search restaurants..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        onKeyDown={(e) => {
          if (e.key == "Enter") changeFilter("searchText");
        }}
      />
      <div className="flex items-center gap-3 ml-auto">
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
