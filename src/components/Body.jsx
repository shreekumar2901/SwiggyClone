import { useState } from "react";

import RestaurantCard from "./RestaurantCard";
import restaurantsList from "../utils/mockData";
import Search from "./Search";

const Body = () => {
  const [restaurants, setRestaurants] = useState(restaurantsList);
  const filterChangeHandler = (filters) => {
    setRestaurants((_) => {
      let filtered = restaurantsList;
      if (filters.topRated) {
        filtered = filtered.filter((r) => parseFloat(r.info.avgRating) >= 4.0);
      }
      if (filters.budgetFriendly) {
        filtered = filtered.filter((r) => {
          const costMatch = r.info.costForTwo.match(/₹(\d+)/);
          if (costMatch && costMatch[1]) {
            const costValue = parseFloat(costMatch[1]);
            return costValue <= 400;
          }
          return false;
        });
      }
      if (filters.fastDelivery) {
        filtered = filtered.filter((r) => r.info.sla.deliveryTime <= 30);
      }
      return filtered;
    });
  };
  return (
    <div className="body">
      <Search onFiltersChange={filterChangeHandler} />
      <div className="res-container">
        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} restaurant={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
