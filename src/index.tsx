import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import DataProvider from "./Providers/DataProvider";
import SearchProvider from "./Providers/SearchProvider";
import { SliderFilterProvider } from "./Providers/SliderFilterProvider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <DataProvider>
      <SearchProvider>
        <SliderFilterProvider>
          <App />
        </SliderFilterProvider>
      </SearchProvider>
    </DataProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
