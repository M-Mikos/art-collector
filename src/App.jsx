import router from "./routes";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";

import store, { saveToLocalStorage } from "./store";

/**
 * Function initialize application routes, application provider (React Redux store) and subscribe function.
 * @returns 
 */

function App() {
  // Save current state in local storage
  const subscribeHandler = () => {
    saveToLocalStorage(store.getState());
  };
  store.subscribe(subscribeHandler);

  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
