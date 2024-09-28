import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/Components/Header";
import Body from "./src/Components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./src/Components/About";
import Contact from "./src/Components/Contact";
import Error from "./src/Components/Error";
import AboutClass from "./src/Components/AboutClass";
import RestaurantItem from "./src/Components/RestaurantItem";
// import Grocery from "./Components/Grocery";
const Grocery = lazy(() => import('./src/Components/Grocery'));

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
      { path: "/restaurant/:id", element: <RestaurantItem /> },

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
