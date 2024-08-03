import React from "react";
import { FiPlus } from "react-icons/fi";
import Calender2 from "../../assets/images/calendar-2.png";
import Calender from "../../assets/images/calendar.png";
import Calender1 from "../../assets/images/calendar1.png";
import Category from "../../assets/images/category.png";
import First from "../../assets/images/First.png";
import Last from "../../assets/images/Last.png";
import menuLeft from "../../assets/images/menu-left.png";
import Next from "../../assets/images/Next.png";
import polygon from "../../assets/images/Polygon.png";
import Prev from "../../assets/images/Prev.png";
import search from "../../assets/images/search-normal.png";
import taskSquare from "../../assets/images/task-square.png";
import FooterNavigation from "../FooterNavigation";

const Absences = () => {
  return (
    <>
      <div className="p-4 mb-20">
        {/* Header Section */}
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
            <h1 className="text-xl font-semibold text-[#373737]">Absences</h1>

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
        <div className="flex justify-between items-center mb-10">
          {/* Left Navigation Buttons */}
          <div className="flex space-x-2 bg-[#F8F8F8] rounded-md border border-[#D9D9D9] p-2">
            <button className="p-1 text-gray-600 hover:bg-gray-200 rounded">
              <img src={First} alt="" />
            </button>
            <button className="p-1 text-gray-600 hover:bg-gray-200 rounded">
              <img src={Prev} alt="" />
            </button>
            <button className="p-1 text-gray-600 hover:bg-gray-200 rounded">
              <img src={Next} alt="" />
            </button>
            <button className="p-1 text-gray-600 hover:bg-gray-200 rounded">
              <img src={Last} alt="" />
            </button>
          </div>

          {/* Right Navigation Buttons */}
          <div className="flex space-x-2 bg-[#F8F8F8] rounded-md border border-[#D9D9D9]  p-2">
            <button className="p-1 text-gray-600 hover:bg-gray-200 rounded">
              <img src={Calender} alt="" />
            </button>
            <button className="p-1 text-green-600 hover:bg-gray-200 rounded">
              <img src={Calender2} alt="" />
            </button>
            <button className="p-1 text-gray-600 hover:bg-gray-200 rounded">
              <img src={Calender1} alt="" />
            </button>
            <button className="p-1 text-gray-600 hover:bg-gray-200 rounded">
              <img src={taskSquare} alt="" />
            </button>
            <button className="p-1 text-gray-600 hover:bg-gray-200 rounded">
              <img src={Category} alt="" />
            </button>
          </div>
        </div>
        {/* Calendar Section */}
        <div className="bg-white rounded-lg shadow-md p-4 mb-6">
          {/* Calendar Navigation */}
          {/* Calendar Navigation */}

          {/* Calendar */}
          <div className=" flex justify-between items-center mb-4">
            <div className="flex gap-3 items-center">
              <h2 className="text-lg font-medium">September, 2021</h2>
              <img src={polygon} alt="" className="size-2" />
            </div>
            <button className="text-gray-800 ">
              <FiPlus className="font-semibold size-6" />
            </button>
          </div>
          <div className="grid grid-cols-7 gap-1 text-center text-sm">
            <div className="text-[#8AB53E] font-semibold">Mon</div>
            <div className="text-[#8AB53E] font-semibold">Tue</div>
            <div className="text-[#8AB53E] font-semibold">Wed</div>
            <div className="text-[#8AB53E] font-semibold">Thu</div>
            <div className="text-[#8AB53E] font-semibold">Fri</div>
            <div className="text-[#8AB53E] font-semibold">Sat</div>
            <div className="text-[#8AB53E] font-semibold">Sun</div>

            {/* Days of the Month */}
            {Array.from({ length: 30 }, (_, i) => (
              <div
                key={i}
                className={`p-2 ${
                  i + 1 === 11 ? "bg-[#8AB53E] text-white rounded-full" : ""
                }`}
              >
                {i + 1}
              </div>
            ))}
          </div>
        </div>

        {/* Time Management Section */}
        <h1 className="text-[#373737] text-[16px] font-semibold mb-3 ">
          Time Management
        </h1>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-[#EFF9FF] border border-[#38B4FF] rounded-xl p-4 ">
            <h3 className="text-sm font-semibold text-gray-700">
              Leave <br />
              balance
            </h3>
            <p className="text-[20px] font-semibold text-[#38B4FF]">20</p>
          </div>
          <div className="bg-[#FFF2EC] border border-[#FFAE85] rounded-xl p-4 ">
            <h3 className="text-sm font-semibold text-gray-700">
              Leave <br /> Approved
            </h3>
            <p className="text-[20px] font-semibold text-[#FFAE85]">2</p>
          </div>
          <div className="bg-[#F2FFF3] border border-[#7AFF7D] rounded-xl p-4 ">
            <h3 className="text-sm font-semibold text-gray-700">
              Leave <br /> Pending
            </h3>
            <p className="text-[20px] font-semibold text-[#7AFF7D]">4</p>
          </div>
          <div className="bg-[#F8EFFF] border border-[#CA86FF] rounded-xl p-4  relative">
            <h3 className="text-sm font-semibold text-gray-700">
              Leave <br /> Cancelled
            </h3>
            <p className="text-[20px] font-semibold text-[#CA86FF]">10</p>
            <button
              className="absolute bottom-0 right-0 p-4 bg-[#8AB53E]
             text-white rounded-full shadow-md"
            >
              <FiPlus className="size-6 font-bold" />
            </button>
          </div>
        </div>
      </div>
      <FooterNavigation />
    </>
  );
};

export default Absences;
