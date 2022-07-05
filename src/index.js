import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import "../src/assets/css/style.css";
import "../src/assets/css/util.css";
import "../src/assets/bootstrap/css/bootstrap-grid.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Preloader from "./components/common/Loader/PreLoader";
const App = lazy(() => import("./App"));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <Suspense fallback={<Preloader />}>
          <App />
        </Suspense>
      </React.StrictMode>
    </BrowserRouter>
  </Provider>
);

reportWebVitals();
