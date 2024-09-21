import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";


const AppLayout = () => {
  return (
    <div>
      <Header />
      <Body />
    </div>
  );
};

export default AppLayout;



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
