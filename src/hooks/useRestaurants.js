import { useEffect, useState } from "react";
import { BASE_URL } from "../utils/constants";

const useRestaurants = (isOnline) => {
  const [restaurants, setRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);

  useEffect(() => {
    if (!isOnline) return;
    fetchRestaurants();
  }, [isOnline]);

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

  return [restaurants, allRestaurants, setRestaurants];
};

export default useRestaurants;
