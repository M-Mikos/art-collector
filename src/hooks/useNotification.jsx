import { useState } from "react";
import PopupNotification from "../components/UI/PopupNotification";

function useNotification() {
  const [isNotification, setIsNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState();

  const showNotification = (message) => {
    setIsNotification(true);
    setNotificationMessage(message);
    setTimeout(() => {
      setIsNotification(false);
    }, 2000);
  };

  const notification = (
    <PopupNotification>{notificationMessage}</PopupNotification>
  );

  return [notification, isNotification, showNotification];
}

export default useNotification;
