const About = () => {
  return (
    <section className="about">
      <div className="about-hero">
        <span className="about-badge">About Us</span>
        <h1 className="about-title">
          Crafting <span>delightful meals</span>, one order at a time.
        </h1>
        <p className="about-subtitle">
          We are a passionate team of food lovers, technologists, and logistics
          pros on a mission to bring your favorite flavours right to your
          doorstep&mdash;fast, fresh, and full of joy.
        </p>
      </div>

      <div className="about-panels">
        <article className="about-panel">
          <div className="about-panel-icon">🍽️</div>
          <h2>Curated Menus</h2>
          <p>
            From hidden gems to crowd favorites, we partner with top local
            restaurants to keep your cravings happily satisfied.
          </p>
        </article>

        <article className="about-panel">
          <div className="about-panel-icon">⚡</div>
          <h2>Lightning Delivery</h2>
          <p>
            Our delivery wizards use smart routing to get piping hot meals to
            you before the cravings hit their peak.
          </p>
        </article>

        <article className="about-panel">
          <div className="about-panel-icon">🤝</div>
          <h2>Community First</h2>
          <p>
            We invest in our partners and proudly support local kitchens,
            empowering culinary dreams across the city.
          </p>
        </article>
      </div>

      <div className="about-story">
        <div className="about-story-card">
          <h3>Our Story</h3>
          <p>
            What started as a small team with a shared obsession for great food
            has grown into a vibrant community of passionate people working to
            make mealtimes magical. Every day we experiment, taste, tweak, and
            test to make your experience smoother and richer than the last.
          </p>
        </div>
        <div className="about-story-card">
          <h3>The Promise</h3>
          <p>
            We promise to keep innovating moments of delight&mdash;from seamless
            ordering to impeccable delivery&mdash;because food is more than a
            meal. It&rsquo;s comfort, celebration, and connection. Thank you for
            letting us be part of your everyday stories.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
