import router from "./routes";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";

import store, { saveToLocalStorage } from "./store";

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
