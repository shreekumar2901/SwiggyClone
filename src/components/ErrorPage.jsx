import { useRouteError } from "react-router-dom";

const ErrorDetails = ({ error }) => {
  if (!error) return null;

  const status = error.status || error.statusCode;
  const title = error.statusText || error.title || null;
  const message =
    error.data ||
    error.message ||
    (typeof error === "string" ? error : null);

  return (
    <div className="error-detail">
      {(status || title) && (
        <div className="error-detail-status">
          {status && <span className="error-detail-code">{status}</span>}
          {title && (
            <span className="error-detail-title">{title}</span>
          )}
        </div>
      )}
      {message ? (
        <pre className="error-detail-message">{String(message)}</pre>
      ) : null}
    </div>
  );
};

const ErrorPage = () => {
  const error = useRouteError();

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

        <ErrorDetails error={error} />
      </div>
    </section>
  );
};

export default ErrorPage;
