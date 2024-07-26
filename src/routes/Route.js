import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../shared/Login";
import Signup from "../shared/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/sign-up",
    element: <Signup />,
  },
]);
export default router;
