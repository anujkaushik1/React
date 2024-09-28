import { useEffect, useState } from "react";

const useOnlineOfflineStatus = () => {
  const [state, setState] = useState(true); 

  useEffect(() => {
    const handleOnline = () => setState(true);
    const handleOffline = () => setState(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return state;
};

export default useOnlineOfflineStatus;
