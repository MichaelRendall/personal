import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { NavContextProvider } from "./context/nav-context";

import "./index.scss";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <NavContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </NavContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
