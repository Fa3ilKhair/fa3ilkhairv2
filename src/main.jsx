import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./css/index.css";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <I18nextProvider i18n={i18n}>
      <Router>
        <App />
      </Router>
    </I18nextProvider>
  </StrictMode>
);
