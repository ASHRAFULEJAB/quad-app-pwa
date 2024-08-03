import "chart.js/auto"; // Necessary for Chart.js
import React from "react";
import { FiPlus } from "react-icons/fi";
import menuLeft from "../../assets/images/menu-left.png";
import search from "../../assets/images/search-normal.png";
import FooterNavigation from "../FooterNavigation";
import StatisticsChart from "./StatisticsChart";
import Shopping from "../../assets/images/bag-tick.png";
import Monitor from "../../assets/images/monitor.png";
import Food from "../../assets/images/food-dinner-svgrepo-com.png";

const Expenses = () => {
  // Data for the bar chart
  //   const data = {
  //     labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  //     datasets: [
  //       {
  //         label: "Hgb",
  //         data: [90, 110, 150, 85, 95, 100, 105],
  //         backgroundColor: (context) => {
  //           const index = context.dataIndex;
  //           return index === 2 ? "#8AB53E" : "#D3D3D3"; // Highlight Wednesday
  //         },
  //         borderRadius: 8,
  //       },
  //     ],
  //   };

  //   const options = {
  //     scales: {
  //       y: {
  //         beginAtZero: true,
  //         max: 160,
  //       },
  //     },
  //     plugins: {
  //       legend: {
  //         display: false,
  //       },
  //     },
  //   };
  const iconMap = {
    shopping: Shopping,
    computer: Monitor,
    food: Food,
    laptop: Monitor,
  };

  const expenses = [
    {
      icon: "shopping",
      label: "Shopping",
      date: "30 Apr 2024",
      amount: "-$1550",
    },
    {
      icon: "computer",
      label: "Computer",
      date: "28 Apr 2024",
      amount: "-$3500",
    },
    { icon: "food", label: "Food", date: "25 Apr 2024", amount: "-$200" },
    {
      icon: "shopping",
      label: "Shopping",
      date: "22 Apr 2024",
      amount: "-$3000",
    },
    { icon: "food", label: "Food", date: "20 Apr 2024", amount: "-$150" },
    { icon: "laptop", label: "Laptop", date: "18 Apr 2024", amount: "-$4500" },
  ];

  return (
    <>
      {" "}
      <div className="p-4 mb-20">
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
            <h1 className="text-xl font-semibold text-[#373737]">Expenses</h1>

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
        {/* Header Section */}

        {/* Statistics Section */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-[18px] font-semibold text-gray-800">
              Statistics
            </h2>
            <select
              className="bg-[#8AB53E] text-white text-sm font-semibold rounded p-1 border-[#8AB53E]   focus:outline-none
                focus:ring-[#8AB53E] focus:border-[#8AB53E]"
            >
              <option className="">Monthly</option>
              <option>Weekly</option>
            </select>
          </div>
        </div>
        <StatisticsChart />
        <h1 className="text-[#373737] text-[18px] font-semibold mb-3 ">
          Expenses
        </h1>
        {/* Expenses List Section */}
        <div className="space-y-4 ">
          {expenses.map((expense, index) => (
            <div
              key={index}
              className="flex justify-between items-center bg-white p-3 rounded-lg "
            >
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-md bg-[#F8F8F8] border border-[#D9D9D9]  flex items-center justify-center">
                  <img
                    src={iconMap[expense.icon]}
                    alt={expense.label}
                    className="w-6 h-6"
                  />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-800">
                    {expense.label}
                  </h3>
                  <p className="text-xs text-gray-500">{expense.date}</p>
                </div>
              </div>
              <p className="text-[#8AB53E] font-semibold">{expense.amount}</p>
            </div>
          ))}
        </div>

        {/* Floating Action Button */}
        <button className="fixed bottom-16 right-4 bg-[#8AB53E] p-4 rounded-full text-white shadow-lg">
          <FiPlus className="text-2xl" />
        </button>
      </div>
      <FooterNavigation />
    </>
  );
};

export default Expenses;
