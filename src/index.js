import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { stores } from "./Stores/Stores";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={stores}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
