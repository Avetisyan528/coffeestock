import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@fontsource-variable/golos-text";
import "@fontsource-variable/manrope";
import "./research.css";
import Research from "./Research";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Research />
  </StrictMode>,
);
