import React from "react";
import Attendence from "../../assets/images/attendence.png";
import Graph from "../../assets/images/graph.png";

const AttendanceIndexCard = () => {
  return (
    <div className="flex items-center justify-between bg-[#C9E4CA] p-4 rounded-xl border border-[#ACD5AD]  w-full mb-5">
      <div>
        <div className="flex items-center">
          {" "}
          <div className="bg-[#A8DBAA] h-[50px] w-[50px] rounded-full">
            <img src={Graph} alt="" className="mt-3 ml-4" />
          </div>
          <div className="ml-4">
            <div className="text-xl font-bold text-gray-700">73.75%</div>
          </div>
        </div>
        <p className="text-[#373737] mt-4 font-semibold">Attendance Index</p>
      </div>

      <div>
        <img src={Attendence} alt="Icon" className="w-18 h-20 object-contain" />
      </div>
    </div>
  );
};

export default AttendanceIndexCard;
