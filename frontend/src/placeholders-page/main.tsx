import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@fontsource-variable/golos-text";
import "@fontsource-variable/manrope";
import "../research/research.css";
import "./placeholders.css";
import PlaceholdersPage from "./PlaceholdersPage";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PlaceholdersPage />
  </StrictMode>,
);
