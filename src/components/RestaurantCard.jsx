import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ restaurant }) => {
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={CDN_URL + restaurant.info.cloudinaryImageId}
        alt="res-logo"
      />
      <h3>{restaurant.info.name}</h3>
      <h4>{restaurant.info.cuisines.join(", ")}</h4>
      <h4>{restaurant.info.avgRating}</h4>
    </div>
  );
};
export default RestaurantCard;
