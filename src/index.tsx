import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { NavContextProvider } from "./context/nav-context";
import { CookiesProvider } from "react-cookie";

import "./index.scss";
import App from "./App";
import ThemeContextProvider from "./context/theme-context";

ReactDOM.render(
  <React.StrictMode>
    <CookiesProvider>
      <ThemeContextProvider>
        <NavContextProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </NavContextProvider>
      </ThemeContextProvider>
    </CookiesProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
