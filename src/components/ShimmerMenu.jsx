const ShimmerMenu = () => {
  return (
    <div className="shimmer-menu" aria-hidden="true">
      <section className="shimmer-menu-hero">
        <div className="shimmer-menu-hero-info">
          <div className="shimmer-block shimmer-line-xl shimmer-gradient" />
          <div className="shimmer-block shimmer-line-md shimmer-gradient" />
          <div className="shimmer-menu-meta">
            <span className="shimmer-chip shimmer-gradient" />
            <span className="shimmer-chip shimmer-gradient" />
            <span className="shimmer-chip shimmer-gradient" />
            <span className="shimmer-chip shimmer-gradient" />
          </div>
          <div className="shimmer-menu-service">
            <span className="shimmer-pill shimmer-gradient" />
            <div className="shimmer-block shimmer-line-sm shimmer-gradient" />
          </div>
        </div>
        <div className="shimmer-menu-hero-media">
          <div className="shimmer-menu-photo shimmer-gradient" />
          <div className="shimmer-block shimmer-line-xs shimmer-gradient" />
        </div>
      </section>

      <section className="shimmer-menu-content">
        {Array.from({ length: 3 }).map((_, sectionIndex) => (
          <div className="shimmer-menu-section" key={sectionIndex}>
            <div className="shimmer-block shimmer-line-lg shimmer-gradient" />
            <div className="shimmer-block shimmer-line-sm shimmer-gradient" />
            <div className="shimmer-menu-items">
              {Array.from({ length: 3 }).map((_, itemIndex) => (
                <div className="shimmer-menu-item" key={itemIndex}>
                  <div className="shimmer-menu-item-body">
                    <div className="shimmer-block shimmer-line-md shimmer-gradient" />
                    <div className="shimmer-block shimmer-line-sm shimmer-gradient" />
                    <div className="shimmer-block shimmer-line-xs shimmer-gradient" />
                  </div>
                  <div className="shimmer-menu-item-thumb shimmer-gradient" />
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default ShimmerMenu;

