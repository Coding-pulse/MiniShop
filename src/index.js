import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Page1 from "./Components/Page1";
import Page2 from "./Components/Page2";
import Anima from "./Components/Anima";
import Run from "./Components/Run";
import Run2 from "./Components/Run2";
import Run3 from "./Components/Run3";
import Menu from "./Components/Menu";
import Button from "./Components/Button";
import Preload from "./Components/Preload";
import Start from "./Components/Start";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Preload />,
  },
  {
    path: "/shop/:name",
    element: <Run3 />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
