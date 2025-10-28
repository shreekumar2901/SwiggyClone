import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const err = useRouteError();
  console.error(err);
  return (
    <section className="error-page">
      <div className="error-graphic">
        <span className="error-bubble error-bubble-lg" />
        <span className="error-bubble error-bubble-sm" />
        <div className="error-glow" />
        <div className="error-icon">😕</div>
      </div>

      <div className="error-copy">
        <span className="error-badge">Oops!</span>
        <h1 className="error-title">Something tasty went missing.</h1>
        <p className="error-subtitle">
          The page you were looking for has been plated elsewhere. Please check
          the URL or head back to the home page to continue your food journey.
        </p>
        <div className="error-actions">
          <a href="/" className="error-button error-button-primary">
            Back to Home
          </a>
          <a href="/contact" className="error-button error-button-secondary">
            Contact Support
          </a>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
