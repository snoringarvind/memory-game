import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// const sum = (i) => {
//   return i * 2;
// };

// const x = {};
// for (let i = 0; i < 10; i++) {
//   let j = i * 5;
//   x[j] = sum(j);
// }

// console.log(x);

// const x = [{}];
// console.log(x.i);
