import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import {Header} from "./Header";

const App = () => (
  <div className="container">
    <div>Name: hom </div>
    <div>Framework: react</div>
    <div>Language: JavaScript</div>
    <div>CSS: Empty CSS</div>
    <Header></Header>
  </div>
);
const rootElement = document.getElementById("app")
if (!rootElement) throw new Error("Failed to find the root element")

const root = ReactDOM.createRoot(rootElement)

root.render(<App />)