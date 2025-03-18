import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";  // ✅ Import HelmetProvider
import LandingPage from "./LandingPage";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>  {/* ✅ Wrap everything in HelmetProvider */}
      <BrowserRouter>
        <Routes>
          <Route path="/landing/:id" element={<LandingPage />} />
          <Route path="/" element={<div>Hello</div>} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);
