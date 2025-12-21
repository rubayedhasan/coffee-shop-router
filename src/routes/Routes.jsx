import { createBrowserRouter } from "react-router";
import MainLayout from "../mainLayouts/MainLayout";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import Coffees from "../pages/Coffees";
import Dashboard from "../pages/Dashboard";
import CollectionOfCoffees from "../components/CollectionOfCoffees";
import CoffeeDetails from "../pages/CoffeeDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        loader: () => fetch("../categories.json"),
        element: <Home />,
        children: [
          {
            path: "/",
            loader: () => fetch("../coffees.json"),
            element: <CollectionOfCoffees />,
          },
          {
            path: "/category/:categoryName",
            loader: () => fetch("../coffees.json"),
            element: <CollectionOfCoffees />,
          },
        ],
      },
      {
        path: "/coffees",
        loader: () => fetch("../coffees.json"),
        element: <Coffees />,
      },
      {
        path: "/coffee/:coffeeId",
        loader: () => fetch("../coffees.json"),
        element: <CoffeeDetails />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);

export { router };
