import { useEffect, useState, useCallback } from "react";

import RestaurantCard from "./RestaurantCard";
import { RESTAURANT_API } from "../utils/constants";
import Search from "./Search";
import Shimmer from "./Shimmer";

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchRestaurants = async () => {
    try {
      setIsLoading(true);
      const data = await fetch(RESTAURANT_API);
      const json = await data.json();
      const list =
        json?.data?.cards[1]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards ||
        [];
      setAllRestaurants(list);
      setRestaurants(list);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const filterChangeHandler = (filters) => {
    let filtered = allRestaurants;

    if (filters.topRated) {
      filtered = filtered.filter(
        (r) => parseFloat(r.card.card.info.avgRating) >= 4.2
      );
    }

    if (filters.budgetFriendly) {
      filtered = filtered.filter((r) => {
        const costValue = parseInt(r.card.card.info.costForTwo) / 100;
        return costValue <= 300;
      });
    }

    if (filters.fastDelivery) {
      filtered = filtered.filter(
        (r) => r.card.card.info.sla.deliveryTime <= 35
      );
    }

    setRestaurants(filtered);
  };

  return (
    <div className="body">
      <Search onFiltersChange={filterChangeHandler} />
      <div className="res-container">
        {isLoading ? (
          <Shimmer count={10} />
        ) : (
          restaurants.map((restaurant) => (
            <RestaurantCard
              key={restaurant.card.card.info.id}
              restaurant={restaurant.card.card}
            />
          ))
        )}
      </div>
    </div>
  );
};
export default Body;
