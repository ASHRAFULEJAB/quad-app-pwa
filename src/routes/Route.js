import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../shared/Login";
import Signup from "../shared/Signup";
import Employee from "../pages/employee/Employee";
import Notification from "../pages/notifications/Notification";
import Tickets from "../pages/tickets/Tickets";
import NewTickets from "../pages/tickets/NewTickets";
import ETicketDetails from "../pages/tickets/ETicketDetails";

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
  {
    path: "/notification",
    element: <Notification />,
  },
  {
    path: "/tickets",
    element: <Tickets />,
  },
  {
    path: "/new-tickets",
    element: <NewTickets />,
  },
  {
    path: "/e-ticketsdetails",
    element: <ETicketDetails />,
  },
]);
export default router;
