const Shimmer = ({ count = 8 }) => (
  <>
    {Array.from({ length: count }).map((_, index) => (
      <article className="res-card shimmer-card" key={index} aria-hidden="true">
        <div className="shimmer-image shimmer-gradient" />
        <div className="shimmer-content">
          <div className="shimmer-line shimmer-gradient shimmer-line-lg" />
          <div className="shimmer-line shimmer-gradient shimmer-line-md" />
          <div className="shimmer-meta">
            <span className="shimmer-pill shimmer-gradient shimmer-pill-sm" />
            <span className="shimmer-pill shimmer-gradient shimmer-pill-sm" />
          </div>
          <div className="shimmer-line shimmer-gradient shimmer-line-sm" />
        </div>
      </article>
    ))}
  </>
);

export default Shimmer;
