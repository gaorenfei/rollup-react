import React from "react";
import ReactDOM from "react-dom";
import App from "./transfer.jsx"
// import "./index.css";
// Enable LiveReload
// if(process.env.NODE_ENV === "development"){
//   document.write(
//     '<script src="http://' + (location.host || 'localhost').split(':')[0] +
//     ':35729/livereload.js?snipver=1"></' + 'script>'
//   );
// }

ReactDOM.render(
  <App />,
  document.getElementById("root")
);