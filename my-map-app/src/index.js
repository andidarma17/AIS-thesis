// src/index.js
import React from "react";
import ReactDOM from "react-dom/client";
import "./global.css"; // Your custom styles
import App from "./pages/App";
import reportWebVitals from "./reportWebVitals";
import "leaflet/dist/leaflet.css"; // Import Leaflet CSS

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
