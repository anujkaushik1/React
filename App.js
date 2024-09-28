import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/Components/Header";
import Body from "./src/Components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./src/Components/About";
import Contact from "./src/Components/Contact";
import Error from "./src/Components/Error";
import AboutClass from "./src/Components/AboutClass";
import RestaurantItem from "./src/Components/RestaurantItem";
import UserContext from "./context/UserContext";
// import Grocery from "./Components/Grocery";
const Grocery = lazy(() => import("./src/Components/Grocery"));

const AppLayout = () => {
  const [userName, setUserName] = useState("Default User");

  return (
    <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
      <div>
        <UserContext.Provider value={{ loggedInUser: 'Nested Name Which cant be changed' }}>
          <Header />
        </UserContext.Provider>
        {/* <AboutClass name = 'Child 2'/>  */}
        <Outlet />
      </div>
    </UserContext.Provider>
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
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Fallback running for Grocery.....</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      { path: "/restaurant/:id", element: <RestaurantItem /> },
    ],
  },
  {
    path: "/testing",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: "/testing", element: <div>Testing world</div> },
      { path: "/testing/about", element: <About /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
