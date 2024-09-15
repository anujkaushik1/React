import React from "react";
import ReactDOM from 'react-dom/client';

const parent = React.createElement(
  "div",
  { id: "parent"  },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "injecting_heading" }, "hello anuj"),
    React.createElement("h1", { id: "injecting_heading" }, "diffrent h2"),
  ])
);

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
