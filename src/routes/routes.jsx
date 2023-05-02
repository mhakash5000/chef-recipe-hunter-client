import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/home/Home";
import Main from "../pages/layouts/Main";
import NotFound from "../pages/NotFound";
import FoodList from "../pages/home/food/FoodList";
import Login from "../pages/home/Auth/Login";
import Register from "../pages/home/Auth/Register";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "categories/:id",
        element: <FoodList />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/food/${params.id}`),
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
]);
export default router;