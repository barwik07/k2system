import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "./context/ThemeContext";
import { AnimationProvider } from "./context/AnimationContext";
import App from "./App";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <AnimationProvider>
    <ThemeProvider>
      <StrictMode>
        <App />
      </StrictMode>
    </ThemeProvider>
  </AnimationProvider>
);
