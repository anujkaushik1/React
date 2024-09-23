import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import AboutClass from "./Components/AboutClass";
// import Grocery from "./Components/Grocery";
const Grocery = lazy(() => import('./Components/Grocery'));

const AppLayout = () => {
  return (
    <div>
      <Header />
      {/* <AboutClass name = 'Child 2'/>  */}
      <Outlet/>
    </div>
  );
};

export default AppLayout;

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/grocery", element: <Suspense fallback = {<h1>Fallback running for Grocery.....</h1>}><Grocery /></Suspense> },
    ],
  },
  {
    path: "/testing",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: "/testing", element: <div>Testing world</div> },
      { path: "/testing/about", element:<About/> },
 
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
