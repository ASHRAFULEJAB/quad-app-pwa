import React, { useState } from "react";
import FooterNavigation from "../FooterNavigation";
import { FiChevronDown, FiChevronUp, FiMail, FiMenu } from "react-icons/fi";
import search from "../../assets/images/search-normal.png";
import menuLeft from "../../assets/images/menu-left.png";
import cardReceive from "../../assets/images/card-receive.png";
import cardSend from "../../assets/images/card-send.png";
import Sms from "../../assets/images/sms.png";
import SmsNotification from "../../assets/images/sms-notification.png";
import plusVector from "../../assets/images/Vector.png";
import { Link } from "react-router-dom";

const Tickets = () => {
  const [activeTab, setActiveTab] = useState("received");
  const [expanded, setExpanded] = useState(null);

  const toggleExpand = (index) => {
    setExpanded(expanded === index ? null : index);
  };
  return (
    <div>
      <div className=" bg-tranparent  rounded-b-lg mt-16">
        {/* Top Section with Icons and Title */}
        <div className="flex items-center justify-between mb-4">
          {/* Menu Icon */}
          <div
            className="flex items-center justify-center w-10 h-10
         bg-transparent"
          >
            <img src={menuLeft} alt="" />
          </div>

          {/* Title */}
          <h1 className="text-xl font-semibold text-[#373737]">E-Tickets</h1>

          {/* Notification Icon */}
          <div
            className="relative flex items-center justify-center 
           "
          >
            <img src={search} alt="" className="h-7 w-7 mr-3 " />
            {/* <FiBell className="text-xl text-gray-600" />
          <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-green-400 rounded-full"></span> */}
          </div>
        </div>

        {/* Search Bar */}
      </div>
      <div className="p-4">
        {/* Tabs Section */}
        <div
          className="flex   space-x-4 mb-6 bg-[#F8F8F8] border border-[#D9D9D9] 
        p-1 rounded-md"
        >
          <button
            className={`px-6 py-2 rounded-lg text-sm font-semibold ${
              activeTab === "received"
                ? "bg-[#8AB53E] text-white"
                : "bg-gray-100 text-gray-600"
            }`}
            onClick={() => setActiveTab("received")}
          >
            <img src={cardReceive} alt="" className="inline-block mr-2" />
            Received
          </button>
          <button
            className={`px-6 py-2 rounded-lg text-sm font-semibold ${
              activeTab === "received-2"
                ? "bg-[#8AB53E] text-white"
                : "bg-gray-100 text-gray-600"
            }`}
            onClick={() => setActiveTab("received-2")}
          >
            <img src={cardSend} alt="" className="inline-block mr-2" />
            Received
          </button>
        </div>

        {activeTab === "received" && (
          <>
            {/* Alerts Section */}
            <div className="space-y-4">
              <div
                className={`p-3 rounded-lg border ${
                  expanded === 0 ? "border-[#8AB53E]" : "border-[#D9D9D9]"
                } bg-[#F8F8F8] `}
              >
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleExpand(0)}
                >
                  <div className="flex items-center">
                    <img src={Sms} alt="" className="mr-1" />
                    <div>
                      {" "}
                      <span className="text-[12px] font-semibold">
                        Alert: Your PIN has not been changed in the past
                      </span>{" "}
                      <br />
                      <span className="text-[10px] text-gray-500">
                        60 months
                      </span>
                    </div>
                  </div>
                  {expanded === 0 ? (
                    <FiChevronUp className="text-gray-600 ml-2" />
                  ) : (
                    <FiChevronDown className="text-gray-600 " />
                  )}
                </div>
              </div>

              <div
                className={`p-3 rounded-lg border ${
                  expanded === 1 ? "border-[#8AB53E]" : "border-[#D9D9D9]"
                } bg-[#F8F8F8] `}
              >
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleExpand(1)}
                >
                  <div className="flex items-center">
                    <img src={SmsNotification} alt="" className="mr-1" />
                    <div>
                      {" "}
                      <span className="text-[12px] font-semibold">
                        Alert: Your PIN has not been changed in the past
                      </span>{" "}
                      <br />
                      <span className="text-[10px] text-gray-500">
                        54 months
                      </span>
                    </div>
                  </div>
                  {expanded === 1 ? (
                    <FiChevronUp className="text-gray-600" />
                  ) : (
                    <FiChevronDown className="text-gray-600" />
                  )}
                </div>
                {expanded === 1 && (
                  <div className="mt-4 text-sm text-gray-600">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </>
        )}
        {activeTab === "received-2" && (
          <>
            <Link to="/e-ticketsdetails">
              <div
                className={`p-3 rounded-lg border ${
                  expanded === 0 ? "border-[#8AB53E]" : "border-[#D9D9D9]"
                } bg-[#F8F8F8] `}
              >
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleExpand(0)}
                >
                  <div className="flex items-center">
                    <img src={Sms} alt="" className="mr-1" />
                    <div>
                      {" "}
                      <span className="text-[12px] font-semibold">
                        Alert: Your PIN has not been changed in the past
                      </span>{" "}
                      <br />
                      <span className="text-[10px] text-gray-500">
                        60 months
                      </span>
                    </div>
                  </div>
                  {expanded === 0 ? (
                    <FiChevronUp className="text-gray-600 ml-2" />
                  ) : (
                    <FiChevronDown className="text-gray-600 " />
                  )}
                </div>
              </div>
            </Link>
          </>
        )}

        <div className=" flex justify-end mt-36">
          <Link to="/new-tickets">
            <img
              src={plusVector}
              alt=""
              className="bg-[#8AB53E] p-3 rounded-full shadow-xl"
            />
          </Link>
        </div>
      </div>
      <FooterNavigation />
    </div>
  );
};

export default Tickets;
