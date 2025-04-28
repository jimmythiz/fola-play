import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import { SearchProvider } from "./Components/SearchContext"
import PlayerContextProvider from "./Components/PlayerContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
    <SearchProvider>
      <PlayerContextProvider>
      <App />
      </PlayerContextProvider>
      </SearchProvider>
    </BrowserRouter>
  </StrictMode>
);
