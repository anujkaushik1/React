import React from "react";
import ReactDOM from "react-dom/client";

const jsxHeading = <h1 class="world ">Hello world Anuj</h1>;

const HeadingComponent = () => {
  return (
    <div className="container">
      {jsxHeading}
      <h1>This is heading comp</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
