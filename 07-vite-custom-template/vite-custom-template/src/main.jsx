import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

// console.log(import.meta.env);

const domNode = document.getElementById("react-app");
createRoot(domNode).render(
  <StrictMode>
    <App />
  </StrictMode>
);
