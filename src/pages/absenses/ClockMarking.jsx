import React from "react";
import FooterNavigation from "../FooterNavigation";
import menuLeft from "../../assets/images/menu-left.png";
import search from "../../assets/images/search-normal.png";

const ClockMarking = () => {
  return (
    <>
      <div className="p-4">
        {/* Header Section */}
        <div className=" bg-tranparent  rounded-b-lg">
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
              Clock Marking
            </h1>

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

        {/* Clock Marking Section */}
        <div className="bg-[#F8F8F8]  border border-[#D9D9D9] rounded-2xl  p-4 flex items-center space-x-4">
          {/* Circular Time Display */}
          <div className="relative flex items-center justify-center w-24 h-24 rounded-full border-8 border-[#8AB53E]">
            <div className="text-center">
              <div className="text-xs text-black">Current Time</div>
              <div className="text-[12px] font-bold text-black">14:03</div>
            </div>
          </div>

          {/* Description and Buttons */}
          <div className="flex-1">
            <p className="text-sm text-gray-700 mb-4">
              Lorem Ipsum is simply dummy text of the typesetting industry.
            </p>
            <div className="flex space-x-2">
              <button className="px-3 py-1 bg-[#8AB53E] text-white rounded-md shadow-md text-sm font-medium">
                Check In
              </button>
              <button className="px-3 py-1 bg-[#8AB53E] text-white rounded-md shadow-md text-sm font-medium">
                Check Out
              </button>
            </div>
          </div>
        </div>
      </div>
      <FooterNavigation />
    </>
  );
};

export default ClockMarking;
