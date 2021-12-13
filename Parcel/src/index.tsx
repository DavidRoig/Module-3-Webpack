import React from "react";
import ReactDOM from "react-dom";
import "./styles.scss";

import { HelloWorldComponent } from "./component";

console.log(`Application running in mode: ${process.env.NODE_ENV}`);
console.log(`Application secret: ${process.env.API_SECRET}`);

ReactDOM.render(<HelloWorldComponent />, document.getElementById("root"));
