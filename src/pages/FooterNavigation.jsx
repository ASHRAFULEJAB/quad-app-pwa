import React from "react";
import Homeicon from "../assets/images/IconHome.png";
import Carticon from "../assets/images/IconCart.png";
import Ticketicon from "../assets/images/ticket-2.png";
import Notification from "../assets/images/IconNotification.png";
import Profileicon from "../assets/images/IconProfile.png";
import { Link, useLocation } from "react-router-dom";
import CartIcon from "../assets/images/Icon - Cart.png";
import ticket2 from "../assets/images/ticket2.png";

const FooterNavigation = () => {
  const location = useLocation(); // To get the current URL path

  return (
    <div
      className="fixed bottom-0 left-0 right-0 bg-[#FFFFFF] p-4 flex justify-around 
      shadow-md rounded-b-2xl justify-items-center"
    >
      <Link to="/employee">
        <button
          className={
            location.pathname === "/employee"
              ? "text-[#8AB53E]"
              : "text-[#C1C1C1]"
          }
        >
          <img src={Homeicon} alt="Home" className="text-[#8AB53E]" />
        </button>
      </Link>

      <Link to="/notification">
        <button
          className={
            location.pathname === "/notification" ? (
              <img src={CartIcon} alt="Cart" />
            ) : (
              "text-[#C1C1C1]"
            )
          }
        >
          <img
            src={location.pathname === "/notification" ? CartIcon : Carticon}
            alt="Cart"
          />
        </button>
      </Link>

      <Link to="/tickets">
        {" "}
        <button
          className={
            location.pathname === "/tickets"
              ? "text-[#8AB53E]"
              : "text-[#C1C1C1]"
          }
        >
          <img
            alt="Tickets"
            src={location.pathname === "/tickets" ? ticket2 : Ticketicon}
          />
        </button>
      </Link>

      <Link to="/absenses">
        <button
          className={
            location.pathname === "/notification"
              ? "text-[#8AB53E]"
              : "text-[#C1C1C1]"
          }
        >
          <img src={Notification} alt="Notifications" />
        </button>
      </Link>

      <Link to="/absense-clockmarking">
        <button
          className={
            location.pathname === "/profile"
              ? "text-[#8AB53E]"
              : "text-[#C1C1C1]"
          }
        >
          <img src={Profileicon} alt="Profile" />
        </button>
      </Link>
    </div>
  );
};

export default FooterNavigation;
