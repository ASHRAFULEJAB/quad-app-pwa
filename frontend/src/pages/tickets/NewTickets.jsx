import React from "react";
import FooterNavigation from "../FooterNavigation";
import menuLeft from "../../assets/images/menu-left.png";
import search from "../../assets/images/search-normal.png";
import { FaMagnifyingGlass } from "react-icons/fa6";

const NewTickets = () => {
  return (
    <>
      <div className="p-4 mb-16">
        {/* Header */}
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
              New E-Tickets
            </h1>

            {/* Notification Icon */}
            <div
              className="relative flex items-center justify-center 
           "
            >
              <FaMagnifyingGlass className="mr-2 size-6" />

              {/* <img src={search} alt="" className="h-7 w-7 mr-3 " /> */}
              {/* <FiBell className="text-xl text-gray-600" />
          <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-green-400 rounded-full"></span> */}
            </div>
          </div>

          {/* Search Bar */}
        </div>

        {/* Form Fields */}
        <div className="space-y-6">
          <div>
            <label className="block text-[16px] font-medium text-[#373737]">
              To
            </label>
            <div className="mt-1 relative">
              <select
                className="block w-full px-3 py-3 border bg-[#F8F8F8]
               border-[#D9D9D9] rounded-md  focus:outline-none
                focus:ring-[#D9D9D9] focus:border-[#D9D9D9] sm:text-sm"
              >
                <option className="bg-white text-gray-700 hover:bg-[#b53e3e] hover:text-white">
                  Lorem Ipsum
                </option>
                <option className="bg-white text-gray-700 hover:bg-[#8AB53E] hover:text-white">
                  Option 2
                </option>
                <option className="bg-white text-gray-700 hover:bg-[#8AB53E] hover:text-white">
                  Option 3
                </option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-[16px] font-medium text-[#373737]">
              Subject
            </label>
            <div className="mt-1">
              <input
                type="text"
                className="block w-full px-3  py-3 border bg-[#F8F8F8]
               border-[#D9D9D9] rounded-md  focus:outline-none
                focus:ring-[#D9D9D9] focus:border-[#D9D9D9] sm:text-sm"
                placeholder="Lorem Ipsum"
              />
            </div>
          </div>

          <div>
            <label className="block text-[16px] font-medium text-[#373737]">
              Priority
            </label>
            <div className="mt-1 relative">
              <select
                className="block w-full px-3 py-3 border bg-[#F8F8F8]
               border-[#D9D9D9] rounded-md  focus:outline-none
                focus:ring-[#D9D9D9] focus:border-[#D9D9D9] sm:text-sm"
              >
                <option className="bg-white text-gray-700 hover:bg-[#b53e3e] hover:text-white">
                  Lorem Ipsum
                </option>
                <option className="bg-white text-gray-700 hover:bg-[#8AB53E] hover:text-white">
                  Option 2
                </option>
                <option className="bg-white text-gray-700 hover:bg-[#8AB53E] hover:text-white">
                  Option 3
                </option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-[16px] font-medium text-[#373737]">
              Category
            </label>
            <div className="mt-1 relative">
              <select
                className="block w-full px-3 py-3 border bg-[#F8F8F8]
               border-[#D9D9D9] rounded-md  focus:outline-none
                focus:ring-[#D9D9D9] focus:border-[#D9D9D9] sm:text-sm"
              >
                <option className="bg-white text-gray-700 hover:bg-[#b53e3e] hover:text-white">
                  Lorem Ipsum
                </option>
                <option className="bg-white text-gray-700 hover:bg-[#8AB53E] hover:text-white">
                  Option 2
                </option>
                <option className="bg-white text-gray-700 hover:bg-[#8AB53E] hover:text-white">
                  Option 3
                </option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-[16px] font-medium text-[#373737]">
              Request Type
            </label>
            <div className="mt-1 relative">
              <select
                className="block w-full px-3 py-3 border bg-[#F8F8F8]
               border-[#D9D9D9] rounded-md  focus:outline-none
                focus:ring-[#D9D9D9] focus:border-[#D9D9D9] sm:text-sm"
              >
                <option className="bg-white text-gray-700 hover:bg-[#b53e3e] hover:text-white">
                  Lorem Ipsum
                </option>
                <option className="bg-white text-gray-700 hover:bg-[#8AB53E] hover:text-white">
                  Option 2
                </option>
                <option className="bg-white text-gray-700 hover:bg-[#8AB53E] hover:text-white">
                  Option 3
                </option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-[16px] font-medium text-[#373737]">
              Process
            </label>
            <div className="mt-1 relative">
              <select
                className="block w-full px-3 py-3 border bg-[#F8F8F8]
               border-[#D9D9D9] rounded-md  focus:outline-none
                focus:ring-[#D9D9D9] focus:border-[#D9D9D9] sm:text-sm"
              >
                <option className="bg-white text-gray-700 hover:bg-[#b53e3e] hover:text-white">
                  Lorem Ipsum
                </option>
                <option className="bg-white text-gray-700 hover:bg-[#8AB53E] hover:text-white">
                  Option 2
                </option>
                <option className="bg-white text-gray-700 hover:bg-[#8AB53E] hover:text-white">
                  Option 3
                </option>
              </select>
            </div>
          </div>

          <div className="">
            <label className="block text-[16px] font-medium text-[#373737] ">
              Content
            </label>
            <div className="mt-1 ">
              <textarea
                className="block w-full px-3 py-2  border bg-[#F8F8F8]
               border-[#D9D9D9] rounded-md  focus:outline-none
                focus:ring-[#D9D9D9] focus:border-[#D9D9D9] sm:text-sm"
                rows="3"
                placeholder="xyz..."
              />
            </div>
          </div>
          <button className="w-full py-3   bg-[#8AB53E] text-white font-semibold rounded-lg shadow-md">
            Reply
          </button>
        </div>
      </div>
      <FooterNavigation />
    </>
  );
};

export default NewTickets;
