import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const onlineEventListener = window.addEventListener("online", () => {
      setIsOnline(true);
    });

    const offlineEventListener = window.addEventListener("offline", () => {
      setIsOnline(false);
    });

    return () => {
      window.removeEventListener("online", onlineEventListener);
      window.removeEventListener("offline", offlineEventListener);
    };
  }, []);

  return isOnline;
};

export default useOnlineStatus;
