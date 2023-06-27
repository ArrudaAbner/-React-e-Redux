import React from "react";
import ReactDOM from "react-dom/client";
import Calculator from "./main/Calculator";
import "./index.css";
import Button from "./components/Button";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <h1>Calculadora</h1>
    <Calculator></Calculator>
  </div>
);
