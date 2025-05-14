import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../Authentication/Login";
import Body from "../Body/Body";

const Main = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/body",
      element: <Body />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Main;
