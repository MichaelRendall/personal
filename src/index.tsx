import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { NavContextProvider } from "./context/nav-context";
import { CookiesProvider } from "react-cookie";

import "./index.scss";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <CookiesProvider>
      <NavContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </NavContextProvider>
    </CookiesProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
