const OfflineStatus = () => (
  <div className="offline-overlay" role="alert" aria-live="assertive">
    <div className="offline-card">
      <div className="offline-icon" aria-hidden="true">
        <span className="offline-wave offline-wave-outer" />
        <span className="offline-wave offline-wave-inner" />
        <span className="offline-symbol">!</span>
      </div>
      <h2 className="offline-heading">Connection Lost</h2>
      <p className="offline-message">
        We can&apos;t reach the internet right now. Hang tight while we try to
        reconnect.
      </p>
      <ul className="offline-tips">
        <li>Check your Wi-Fi or mobile data signal.</li>
        <li>Make sure airplane mode is turned off.</li>
        <li>Try reloading the page once you&apos;re back online.</li>
      </ul>
      <div className="offline-status">
        <span className="offline-status-dot" />
        <span className="offline-status-text">Reconnecting…</span>
      </div>
    </div>
  </div>
);

export default OfflineStatus;
