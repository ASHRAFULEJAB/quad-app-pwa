import React from "react";
import { FiMenu, FiSearch } from "react-icons/fi";
import notifications from "../../assets/images/Notifications.png";

const HeaderWithSearch = () => {
  return (
    <div className=" bg-tranparent  rounded-b-lg">
      {/* Top Section with Icons and Title */}
      <div className="flex items-center justify-between mb-4">
        {/* Menu Icon */}
        <div
          className="flex items-center justify-center w-10 h-10
         bg-gray-100 rounded-full border border-[#E3E3E3]"
        >
          <FiMenu className="text-xl text-gray-600" />
        </div>

        {/* Title */}
        <h1 className="text-xl font-semibold text-[#373737]">Employee</h1>

        {/* Notification Icon */}
        <div
          className="relative flex items-center justify-center 
          rounded-full "
        >
          <img src={notifications} alt="" className="h-16 w-10 object-cover mt-4"  />
          {/* <FiBell className="text-xl text-gray-600" />
          <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-green-400 rounded-full"></span> */}
        </div>
      </div>

      {/* Search Bar */}
      <div className="flex items-center bg-[#EEEEEE] rounded-xl px-4 py-3 border border-[#D9D9D9]">
        <FiSearch className="text-lg text-[#373737] mr-2" />
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent outline-none text-sm text-[#373737] w-full"
        />
      </div>
    </div>
  );
};

export default HeaderWithSearch;
