import React from "react";
import { ResponsivePie } from "@nivo/pie";
import appionmentImage from "../../assets/images/GroupAppionment.png";

const AppointmentSection = () => {
  const data = [
    {
      id: "Current Time",
      value: 75,
      color: "#FFB900", // Muted orange segment
    },
    {
      id: "Other",
      value: 25,
      color: "#5E93FA", // Muted blue segment
    },
  ];

  return (
    <div
      style={{
        backgroundImage: `url(${appionmentImage})`,

        backgroundPosition: "center",
        width: "100%",

      }}
      className="rounded-xl shadow-lg flex items-center justify-between relative mt-6"
    >
      {/* Text Section */}
      <div className="flex-1 px-4 py-4">
        <h2 className="text-white text-[21px] font-semibold">appointment</h2>
        <p
          className="text-white text-[13px] mt-2 mb-4"
        >
          Current Time 14:03 Your last appointment was EXIT 321 day(s) ago at
          18:00 hours.
        </p>
        <div className=" flex">
          <button className="bg-white text-green-500 font-semibold px-4 py-2 rounded-xl mr-2">
            Entrance
          </button>
          <button className="bg-red-500 text-white font-semibold px-4 py-2 rounded-xl">
            Exit
          </button>
        </div>
      </div>

      {/* Pie Chart Section */}
      <div className="relative w-32 h-32 mr-4">
        <ResponsivePie
          data={data}
          margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
          innerRadius={0.7}
          enableRadialLabels={false}
          enableArcLinkLabels={false}
          enableArcLabels={false}
          enableSliceLabels={false}
          colors={{ datum: "data.color" }}
          borderWidth={0}
          isInteractive={false}
          animate={true}
          motionConfig="stiff"
        />
        <div
          className="absolute inset-0 flex flex-col items-center justify-center
         text-white text-center"
        >
          <div className="text-xs">Current Time</div>
          <div className="text-sm font-bold">14:03</div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentSection;
