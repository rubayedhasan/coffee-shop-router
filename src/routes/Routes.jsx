import { createBrowserRouter } from "react-router";
import App from "../App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/home",
    element: <div>Home</div>,
  },
]);

export { router };
