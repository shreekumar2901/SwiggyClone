import { useEffect, useState } from "react";
import { BASE_URL } from "../utils/constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState({});
  const [menuInfo, setMenuInfo] = useState([]);

  useEffect(() => {
    fetchRestaurantMenu(resId);
  }, []);

  const fetchRestaurantMenu = async (resId) => {
    const data = await fetch(BASE_URL + `/listRestaurantMenu/${resId}`);
    const json = await data.json();
    setResInfo(json?.data?.cards[2]?.card?.card?.info);
    setMenuInfo(
      json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
    );
  };

  return [resInfo, menuInfo];
};

export default useRestaurantMenu;
