import { useState } from "react";
import PopupNotification from "../components/UI/PopupNotification";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../store/ui-slice";

function useNotification() {
  const isNotification = useSelector(
    (state) => state.ui.popupNotification.display
  );
  const notificationMessage = useSelector(
    (state) => state.ui.popupNotification.message
  );
  const dispatch = useDispatch();
  const [timeoutID, setTimeoutId] = useState();

  const showNotification = (message) => {
    dispatch(uiActions.toggle());
    toggleNotification;

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
