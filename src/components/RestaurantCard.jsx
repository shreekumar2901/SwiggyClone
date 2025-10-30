import { NavLink } from "react-router-dom";
import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ restaurant }) => {
  return (
    <NavLink to={`/restaurant/${restaurant.info.id}`}>
      <div className="res-card">
        <img
          className="res-logo"
          src={CDN_URL + restaurant.info.cloudinaryImageId}
          alt="res-logo"
        />
        <h3>{restaurant.info.name}</h3>
        <h4>{restaurant.info.cuisines.join(", ")}</h4>
        <div className="res-meta">
          <span className="res-meta-item res-meta-rating">
            <span className="res-meta-icon">★</span>
            {restaurant.info.avgRating}
          </span>
          <span className="res-meta-item res-meta-price">
            <span className="res-meta-icon">₹</span>
            {restaurant.info.costForTwo}
          </span>
          <span className="res-meta-item res-meta-time">
            <span className="res-meta-icon">⏱</span>
            {restaurant.info.sla.deliveryTime} mins
          </span>
        </div>
      </div>
    </NavLink>
  );
};
export default RestaurantCard;
