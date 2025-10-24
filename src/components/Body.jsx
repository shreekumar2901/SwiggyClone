import RestaurantCard from "./RestaurantCard";
import restaurants from "../utils/mockData";

const Body = () => {
  return (
    <div className="body">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search restaurants..."
          className="search-input"
        />
        <button className="search-button" type="button">
          Search
        </button>
      </div>
      <div className="res-container">
        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} restaurant={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
