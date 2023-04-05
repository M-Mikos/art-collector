import { useState } from "react";
import { useDispatch } from "react-redux";
import { uiActions } from "../store/ui-slice";
import { POPUP_NOTIFICATION_TIMEOUT } from "../../config";

function useNotification() {
  const dispatch = useDispatch();
  const [timeoutID, setTimeoutId] = useState();

  const showNotification = (message) => {
    dispatch(uiActions.showNotification(message));

    // End prevous notification
    clearTimeout(timeoutID);

    const timeout = setTimeout(() => {
      dispatch(uiActions.hideNotification());
    }, POPUP_NOTIFICATION_TIMEOUT);

    setTimeoutId(timeout);
  };

  return [showNotification];
}

export default useNotification;
