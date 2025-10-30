import { useEffect, useState } from "react";

import RestaurantCard from "./RestaurantCard";
import { BASE_URL } from "../utils/constants";
import Search from "./Search";
import Shimmer from "./Shimmer";

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [restaurants, setRestaurants] = useState([]);

  const fetchRestaurants = async () => {
    const data = await fetch(BASE_URL + "/listRestaurants");
    const json = await data.json();
    setRestaurants(
      json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || []
    );
    setAllRestaurants(
      json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || []
    );
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
          const cardInfo = r.info;
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
        filtered = filtered.filter((r) => parseFloat(r.info.avgRating) >= 4.2);
      }
      if (filters.budgetFriendly) {
        filtered = filtered.filter((r) => {
          // Do a regex match for &400 for two. I wanna extract the number
          const costMatch = r.info.costForTwo.match(/₹(\d+)/);
          if (costMatch && costMatch.length > 1) {
            const cost = parseInt(costMatch[1]);
            return cost <= 300;
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
        {restaurants.length == 0 ? (
          <Shimmer count={10} />
        ) : (
          restaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.info.id} restaurant={restaurant} />
          ))
        )}
      </div>
    </div>
  );
};
export default Body;
