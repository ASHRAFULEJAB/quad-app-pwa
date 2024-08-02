import React from "react";
import FooterNavigation from "../FooterNavigation";
import search from "../../assets/images/search-normal.png";
import menuLeft from "../../assets/images/menu-left.png";

const ETicketDetails = () => {
  return (
    <>
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
          <h1 className="text-xl font-semibold text-[#373737]">
            E-Tickets Details
          </h1>

          {/* Notification Icon */}
          <div
            className="relative flex items-center justify-center 
           "
          >
            <img src={search} alt="" className="h-7 w-7 mr-3 " />
            {/* <FiBell className="text-[13px] text-[#7D7D7D]" />
          <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-green-400 rounded-full"></span> */}
          </div>
        </div>

        {/* Search Bar */}
      </div>
      <div className="p-4  mb-16">
        {/* Header */}

        {/* Details Section */}
        <div className="border border-[#D9D9D9] rounded-2xl p-4 mb-6 bg-[#F8F8F8]">
          <div className="mb-4">
            <h3 className="text-sm font-semibold text-gray-800">Subject</h3>
            <p className="text-[13px] text-[#7D7D7D]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <div className="mb-4">
            <h3 className="text-sm font-semibold text-gray-800">Date</h3>
            <p className="text-[13px] text-[#7D7D7D]">25 May 2024</p>
          </div>
          <div className="mb-4">
            <h3 className="text-sm font-semibold text-gray-800">Priority</h3>
            <p className="text-[13px] text-[#7D7D7D]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <div className="mb-4">
            <h3 className="text-sm font-semibold text-gray-800">Category</h3>
            <p className="text-[13px] text-[#7D7D7D]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <div className="mb-4">
            <h3 className="text-sm font-semibold text-gray-800">
              Request Type
            </h3>
            <p className="text-[13px] text-[#7D7D7D]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <div className="mb-4">
            <h3 className="text-sm font-semibold text-gray-800">Process</h3>
            <p className="text-[13px] text-[#7D7D7D]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-800">Content</h3>
            <p className="text-[13px] text-[#7D7D7D]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>

        {/* Reply Button */}
        <button className="w-full py-3 bg-[#8AB53E] text-white font-semibold rounded-lg shadow-md">
          Reply
        </button>
      </div>
      <FooterNavigation />
    </>
  );
};

export default ETicketDetails;
