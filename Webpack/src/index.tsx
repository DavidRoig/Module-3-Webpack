import React from "react";
import ReactDOM from "react-dom";
import { HelloWorld } from "component";
import "./styles.scss";

ReactDOM.render(
  <div>
    <HelloWorld />
  </div>,
  document.getElementById("root")
);

console.log("Hola ejercicio en Webpack!");
console.log(`Api url: ${process.env.API_URL}`);
