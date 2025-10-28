const dummyMenu = {
  name: "Spice Symphony",
  cuisines: ["Pan-Asian", "Modern Indian", "Desserts"],
  rating: 4.6,
  ratingCount: "2.1K+ ratings",
  costForTwo: "₹650 for two",
  deliveryTime: "32 mins",
  distance: "3.4 km away",
  location: "Church Street • Bengaluru",
  offers: [
    { title: "FLAT 20% OFF", description: "Use code SYMPHONY20" },
    { title: "FREE DESSERT", description: "On orders above ₹799" },
    { title: "20% CASHBACK", description: "Pay with Swiggy Money" },
  ],
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
  const {
    name,
    cuisines,
    rating,
    ratingCount,
    costForTwo,
    deliveryTime,
    distance,
    location,
    offers,
    categories,
  } = dummyMenu;

  return (
    <div className="menu-page">
      <section className="menu-hero">
        <div className="menu-hero-info">
          <h1 className="menu-title">{name}</h1>
          <p className="menu-subtitle">{cuisines.join(" • ")}</p>
          <div className="menu-meta">
            <span className="menu-meta-chip">
              <span className="menu-meta-icon">★</span>
              {rating}{" "}
              <span className="menu-meta-secondary">({ratingCount})</span>
            </span>
            <span className="menu-meta-chip">
              <span className="menu-meta-icon">⏱</span>
              {deliveryTime}
            </span>
            <span className="menu-meta-chip">
              <span className="menu-meta-icon">₹</span>
              {costForTwo}
            </span>
            <span className="menu-meta-chip">
              <span className="menu-meta-icon">📍</span>
              {distance}
            </span>
          </div>
          <p className="menu-location">{location}</p>
        </div>
        <aside className="menu-offers">
          <h2 className="menu-offers-title">Today&apos;s Offers</h2>
          <ul className="menu-offers-list">
            {offers.map((offer) => (
              <li key={offer.title} className="menu-offer-card">
                <span className="menu-offer-title">{offer.title}</span>
                <span className="menu-offer-description">
                  {offer.description}
                </span>
              </li>
            ))}
          </ul>
        </aside>
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
                <div className="menu-item-card" key={item.name}>
                  <div className="menu-item-content">
                    <div className="menu-item-header">
                      <h3 className="menu-item-title">{item.name}</h3>
                      <div className="menu-item-flags">
                        {item.isPopular && (
                          <span className="menu-item-flag menu-item-popular">
                            Popular
                          </span>
                        )}
                        {item.tags?.map((tag) => (
                          <span className="menu-item-flag" key={tag}>
                            {tag}
                          </span>
                        ))}
                        {item.isVegetarian && (
                          <span className="menu-item-flag menu-item-veg">
                            Veg
                          </span>
                        )}
                        {item.glutenFree && (
                          <span className="menu-item-flag menu-item-gf">
                            Gluten Free
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="menu-item-meta">
                      <span className="menu-item-price">{item.price}</span>
                      {item.spiceLevel && (
                        <span className="menu-item-spice">
                          Spice: {item.spiceLevel}
                        </span>
                      )}
                    </div>
                    <p className="menu-item-description">{item.description}</p>
                  </div>
                  {item.image && (
                    <div className="menu-item-media">
                      <img
                        className="menu-item-image"
                        src={item.image}
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
