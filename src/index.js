import React from "react";
import "react-circular-progressbar/dist/styles.css";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthContextProvider } from "./context/AuthContext";
import { DarkModeContextProvider } from "./context/darkModeContext";
import { TestContextProvider } from "./context/testContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <DarkModeContextProvider>
        <TestContextProvider>
          <App />
        </TestContextProvider>
      </DarkModeContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
