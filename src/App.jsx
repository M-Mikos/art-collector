import router from "./routes";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";

import store from "./store";

import classes from "./App.module.css";

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
