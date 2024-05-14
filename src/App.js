import React from "react";
import ReactDOM from "react-dom/client";
import Header from "../src/Components/Header";
import Body from "../src/Components/Body";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import AboutUs from "./Components/AboutUs";
import ContactUs from "./Components/ContactUs";
import Erorr from "./Components/Erorr";
import ResturantMenu from "./Components/ResturantMenu";

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,

    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/menu/:resId",
        element: <ResturantMenu />,
      },
    ],
    errorElement: <Erorr />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={router} />);
