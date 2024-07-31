import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../shared/Login";
import Signup from "../shared/Signup";
import Employee from "../pages/employee/Employee";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/sign-up",
    element: <Signup />,
  },
  {
    path: "/employee",
    element: <Employee />,
  },
]);
export default router;
