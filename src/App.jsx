import router from "./routes";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";

import store from "./store";

function saveToLocalStorage(state) {
  try {
    const serialisedState = JSON.stringify(state);
    localStorage.setItem("persistantState", serialisedState);
  } catch (e) {
    console.warn(e);
  }
}

// store.subscribe(saveToLocalStorage(store.getState()));

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
