import { useState } from "react";
import { useDispatch } from "react-redux";
import { uiActions } from "../store/ui-slice";
import { POPUP_NOTIFICATION_TIMEOUT } from "../../config";

/**
 * Custom hook for managing notification state.
 * To prevent vanishing upon leaving current page, notification is application-wide. Becouse of that, notification state isn't bound to certain component, but is managed by this hook and Redux UI slice.
 * Hook prevents multiple notification stacking.
 * @returns array with showNotification function for calling popup notification with provided message.
 */

function useNotification() {
  const dispatch = useDispatch();
  const [timeoutID, setTimeoutId] = useState();

  const showNotification = (message, link) => {
    dispatch(uiActions.showNotification({ message, link }));

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
