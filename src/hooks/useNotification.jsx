import { useState } from "react";
import PopupNotification from "../components/UI/PopupNotification";

function useNotification() {
  const [isNotification, setIsNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState();
  const [timeoutID, setTimeoutId] = useState();

  const showNotification = (message) => {
    setIsNotification(true);
    setNotificationMessage(message);

    // End prevous notification
    clearTimeout(timeoutID);

    const timeout = setTimeout(() => {
      setIsNotification(false);
    }, 2000);

    setTimeoutId(timeout);
  };

  const notification = (
    <PopupNotification>{notificationMessage}</PopupNotification>
  );

  return [notification, isNotification, showNotification];
}

export default useNotification;
