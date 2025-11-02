import { useEffect, useState } from "react";
import { BASE_URL, CDN_URL } from "../utils/constants";
import ShimmerMenu from "./ShimmerMenu";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../hooks/useRestaurantMenu";

// Kept dummy data to use in case API data is missing
const dummyMenu = {
  name: "Spice Symphony",
  cuisines: ["Pan-Asian", "Modern Indian", "Desserts"],
  rating: 4.6,
  ratingCount: "2.1K+ ratings",
  costForTwo: "₹650 for two",
  deliveryTime: "32 mins",
  distance: "3.4 km away",
  location: "Church Street • Bengaluru",
  heroImage:
    "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=900&q=80",
  categories: [
    {
      title: "Recommended",
      description: "Signature dishes hand-picked by our chefs.",
      items: [
        {
          name: "Smoked Butter Chicken Bao",
          description:
            "Soft steamed bao stuffed with smoked butter chicken, pickled onions and chili mayo.",
          price: "₹285",
          isPopular: true,
          spiceLevel: "Medium",
          image:
            "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=600&q=80",
        },
        {
          name: "Charred Broccoli & Burrata",
          description:
            "Fire-roasted broccoli florets served with fresh burrata, toasted almonds and chili oil.",
          price: "₹320",
          spiceLevel: "Mild",
          tags: ["Chef's Special"],
        },
        {
          name: "Truffle Edamame Dumplings",
          description:
            "Silky dumplings filled with edamame and water chestnuts, finished with truffle oil.",
          price: "₹295",
          isVegetarian: true,
          spiceLevel: "Mild",
        },
      ],
    },
    {
      title: "Comfort Bowls",
      description: "Warm hearty bowls perfect for cozy evenings.",
      items: [
        {
          name: "Korean Gochujang Ramen",
          description:
            "Slow-cooked ramen broth with pulled chicken, soy egg, nori and chili crumbs.",
          price: "₹340",
          spiceLevel: "High",
        },
        {
          name: "Thai Green Curry Bowl",
          description:
            "Creamy coconut curry with jasmine rice, kaffir lime and seasonal veggies.",
          price: "₹310",
          isVegetarian: true,
          glutenFree: true,
        },
        {
          name: "Smoked Mushroom Risotto",
          description:
            "Arborio rice cooked with wild mushrooms, parmesan tuile and white truffle foam.",
          price: "₹355",
          tags: ["Best Seller"],
        },
      ],
    },
    {
      title: "Dessert Studio",
      description: "Small-batch desserts crafted fresh every evening.",
      items: [
        {
          name: "Salted Caramel Mousse Jar",
          description:
            "Layers of dark chocolate mousse, burnt caramel sauce and almond praline.",
          price: "₹245",
          image:
            "https://images.unsplash.com/photo-1523371054106-bbf80586c38f?auto=format&fit=crop&w=600&q=80",
        },
        {
          name: "Yuzu Cheesecake Slice",
          description:
            "Baked New York cheesecake infused with yuzu zest and a crunchy biscuit base.",
          price: "₹255",
          tags: ["Limited Edition"],
        },
      ],
    },
  ],
};

const RestaurantMenu = () => {
  const { restaurantId } = useParams();
  const [resInfo, menuInfo] = useRestaurantMenu(restaurantId);

  const { heroImage } = dummyMenu;

  if (!resInfo || Object.keys(resInfo).length === 0 || menuInfo.length === 0)
    return <ShimmerMenu />;

  const restaurantName = resInfo?.name ?? dummyMenu.name;

  const heroImageSrc = resInfo?.cloudinaryImageId
    ? `${CDN_URL}${resInfo.cloudinaryImageId}`
    : heroImage;

  const cuisineLabels =
    resInfo?.cuisines && resInfo.cuisines.length > 0
      ? resInfo.cuisines
      : dummyMenu.cuisines;

  const ratingValue = resInfo?.avgRating ?? dummyMenu.rating;
  const ratingSummary = resInfo?.totalRatingsString ?? dummyMenu.ratingCount;
  const costForTwoValue = resInfo?.costForTwo ?? dummyMenu.costForTwo;
  const deliveryValue = resInfo?.sla?.slaString ?? dummyMenu.deliveryTime;
  const distanceValue =
    resInfo?.sla?.lastMileTravelString ?? dummyMenu.distance;
  const localityValue = resInfo?.locality ?? dummyMenu.location;
  const areaValue =
    resInfo?.areaName ?? resInfo?.locality ?? dummyMenu.location;
  const serviceMessage = `Serving ${areaValue} with freshly prepared meals.`;
  const categories = [];

  menuInfo.forEach((card) => {
    if (!card?.card?.card?.itemCards) return;
    const menu = card.card.card;
    const category = {
      title: menu.title,
      items: menu.itemCards.map((itemCard) => {
        return itemCard.card.info;
      }),
    };
    categories.push(category);
  });

  return (
    <div className="menu-page">
      <section className="menu-hero">
        <div className="menu-hero-body">
          <header className="menu-hero-header">
            <h1 className="menu-title">{restaurantName}</h1>
            <p className="menu-subtitle">{cuisineLabels.join(" • ")}</p>
            <p className="menu-location">
              <span className="menu-location-icon">📍</span>
              {localityValue}
            </p>
          </header>
          <div className="menu-meta">
            <span className="menu-meta-chip">
              <span className="menu-meta-icon">★</span>
              {ratingValue}{" "}
              <span className="menu-meta-secondary">({ratingSummary})</span>
            </span>
            <span className="menu-meta-chip">
              <span className="menu-meta-icon">⏱</span>
              {deliveryValue}
            </span>
            <span className="menu-meta-chip">
              <span className="menu-meta-icon">₹</span>
              {costForTwoValue}
            </span>
            <span className="menu-meta-chip">
              <span className="menu-meta-icon">📏</span>
              {distanceValue}
            </span>
          </div>
          <div className="menu-hero-service">
            <span className="menu-hero-badge">Since 2014</span>
            <p className="menu-hero-copy">{serviceMessage}</p>
          </div>
        </div>
        <div className="menu-hero-visual">
          <div className="menu-hero-photo">
            <img
              className="menu-hero-image"
              src={heroImageSrc}
              alt={`${restaurantName} restaurant`}
              loading="lazy"
            />
            <span className="menu-hero-gradient" aria-hidden="true" />
          </div>
          <p className="menu-hero-credit">
            Image representative of the restaurant ambience.
          </p>
        </div>
      </section>

      <section className="menu-content">
        {categories.map((category) => (
          <article className="menu-section" key={category.title}>
            <header className="menu-section-header">
              <h2 className="menu-section-title">{category.title}</h2>
              {category.description && (
                <p className="menu-section-description">
                  {category.description}
                </p>
              )}
            </header>
            <div className="menu-items">
              {category.items.map((item) => (
                <div className="menu-item-card" key={item.id}>
                  <div className="menu-item-content">
                    <div className="menu-item-header">
                      <h3 className="menu-item-title">{item.name}</h3>
                    </div>
                    <div className="menu-item-meta">
                      <span className="menu-item-price">
                        ₹{item.price / 100}
                      </span>
                    </div>
                    <p className="menu-item-description">{item.description}</p>
                  </div>
                  {item.imageId && (
                    <div className="menu-item-media">
                      <img
                        className="menu-item-image"
                        src={CDN_URL + item.imageId}
                        alt={item.name}
                        loading="lazy"
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </article>
        ))}
      </section>
    </div>
  );
};

export default RestaurantMenu;
