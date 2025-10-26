import { useEffect, useState } from "react";

import RestaurantCard from "./RestaurantCard";
import { RESTAURANT_API } from "../utils/constants";
import Search from "./Search";
import Shimmer from "./Shimmer";

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchRestaurants = async () => {
    setIsLoading(true);
    const data = await fetch(RESTAURANT_API);
    const json = await data.json();
    setRestaurants(
      json?.data?.cards[1]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards || []
    );
    setAllRestaurants(
      json?.data?.cards[1]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards || []
    );
    setIsLoading(false);
  };

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const filterChangeHandler = (filters) => {
    setRestaurants((_) => {
      let filtered = allRestaurants;
      if (filters.searchText.length > 0) {
        const searchText = filters.searchText.toLowerCase();
        filtered = filtered.filter((r) => {
          const cardInfo = r.card.card.info;
          // Search by Restaurant Name
          if (cardInfo.name.toLowerCase().includes(searchText)) {
            return true;
          }
          // Search by Cuisine Name
          if (
            cardInfo.cuisines.some((cuisine) => {
              return cuisine.toLowerCase().includes(searchText);
            })
          ) {
            return true;
          }
        });
      }
      if (filters.topRated) {
        filtered = filtered.filter(
          (r) => parseFloat(r.card.card.info.avgRating) >= 4.2
        );
      }
      if (filters.budgetFriendly) {
        filtered = filtered.filter((r) => {
          const costValue = parseInt(r.card.card.info.costForTwo) / 100;
          if (costValue <= 300) return true;
          return false;
        });
      }
      if (filters.fastDelivery) {
        filtered = filtered.filter(
          (r) => r.card.card.info.sla.deliveryTime <= 30
        );
      }
      return filtered;
    });
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
