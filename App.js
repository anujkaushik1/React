import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Error from "./Components/Error";


const AppLayout = () => {
  return (
    <div>
      <Header />
      <Body />
    </div>
  );
};

export default AppLayout;


const appRouter = createBrowserRouter([
  {path: '/', element: <AppLayout/>, errorElement: <Error/>},
  {path: '/about', element: <About/>},
  {path: '/contact', element: <Contact/>}
])



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
