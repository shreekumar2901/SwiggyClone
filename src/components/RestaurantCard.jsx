import { Link } from "react-router-dom";
import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ restaurant }) => {
  return (
    <Link
      to={`/restaurant/${restaurant.info.id}`}
      className="res-card-nav-link"
    >
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
    </Link>
  );
};

export const withPromoted = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="relative inline-block group">
        <span
          aria-label="Promoted restaurant"
          className="pointer-events-none absolute left-3 top-3 inline-flex items-center rounded-[9px] border border-white/10 bg-[linear-gradient(135deg,#0f172a,#161f2f_65%,rgba(251,191,36,0.15))] px-3 py-0.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-50 shadow-[0_8px_18px_rgba(15,23,42,0.45)] transition-all duration-200 ease-out z-10 group-hover:-translate-y-0.5 group-hover:shadow-[0_10px_24px_rgba(15,23,42,0.45)]"
        >
          <span className="pointer-events-none absolute left-1.5 top-1/2 h-[60%] w-[2px] -translate-y-1/2 rounded-full bg-gradient-to-b from-amber-200 to-amber-400 opacity-90"></span>
          <span className="relative z-[1] px-2 pl-4 text-[10px]">Promoted</span>
          <span className="pointer-events-none absolute right-1.5 top-1/2 h-2 w-2 -translate-y-1/2 rotate-45 rounded-[2px] bg-white/60 shadow-[0_0_8px_rgba(255,255,255,0.35)]"></span>
        </span>
        <RestaurantCard {...props} />
      </div>
    );
  };
};
export default RestaurantCard;
