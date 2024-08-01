import React from "react";
import Homeicon from "../../assets/images/IconHome.png";
import Carticon from "../../assets/images/IconCart.png";
import Ticketicon from "../../assets/images/ticket-2.png";
import Notification from "../../assets/images/IconNotification.png";
import Profileicon from "../../assets/images/IconProfile.png";
import AttendanceIndexCard from "../../component/employee/AttendanceIndexCard";
import Clock from "../../assets/images/clock.png";
import Calender from "../../assets/images/calendar-tick.png";
import AppointmentSection from "../../component/employee/AppionmentSection";
import HeaderWithSearch from "../../component/employee/HeaderWithSearch";

const Employee = () => {
  return (
    <>
      <div className="p-4 bg-gray-50 min-h-screen ">
        {/* Top Banner */}
        {/* <div className="bg-blue-100 p-4 rounded-md shadow-md text-center mb-6">
          <div className="text-white bg-blue-500 rounded-full w-20 h-8 mx-auto text-center flex items-center justify-center">
            428 x 50
          </div>
        </div> */}
        <HeaderWithSearch />
        {/* Appointment Section */}
        <AppointmentSection />
        {/* <div className="bg-green-100 p-6 rounded-lg shadow-lg mb-6 relative">
          <div className="text-lg font-semibold text-gray-700">appointment</div>
          <p className="text-gray-500">
            Current Time 14:03 Your last appointment was EXIT 321 day(s) ago at
            18:00 hours.
          </p>
          <div className="absolute top-4 right-4 bg-green-200 rounded-full w-24 h-24 flex items-center justify-center">
            <div className="text-green-700">14:03</div>
          </div>
          <div className="mt-4 flex justify-between">
            <button className="bg-green-500 text-white px-4 py-2 rounded-md">
              Entrance
            </button>
            <button className="bg-red-500 text-white px-4 py-2 rounded-md">
              Exit
            </button>
          </div>
        </div> */}

        {/* Metrics Section */}
        <div className="grid grid-cols-2 gap-4 mb-6 mt-6">
          <div>
            <div className="bg-[#CFDEE7] p-4 rounded-xl   border border-[#BED4E1]">
              <div className="flex items-center">
                {" "}
                <div className="bg-[#AFCCDD] h-[48px] w-[55px] rounded-full flex items-center justify-center">
                  <img src={Calender} alt="" className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-xl font-bold text-gray-700 ml-3">
                    +69
                  </div>
                  <p className="text-[#373737]  ml-3 font-medium">dias</p>
                </div>
              </div>
              <p className="text-[#373737] mt-4 font-semibold">Fairs</p>
            </div>
          </div>
          <div>
            <div className="bg-[#EFD9CE] p-4 rounded-xl   border border-[#E4CBBE]">
              <div className="flex items-center">
                {" "}
                <div className="bg-[#E9CCBD] h-[48px] w-[55px] rounded-full flex items-center justify-center">
                  <img src={Clock} alt="" className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-xl font-bold text-gray-700 ml-3">
                    -120:31
                  </div>
                  <p className="text-[#373737]  ml-3 font-medium">Hours</p>
                </div>
              </div>
              <p className="text-[#373737] mt-4 font-semibold">Adaptability</p>
            </div>
          </div>
        </div>
        <AttendanceIndexCard />

        {/* Time Management Section */}
        <div className="mb-16">
          <div className="text-[18px] font-semibold text-[#373737] mb-2">
            Time Management
          </div>
          <div className="bg-[#F8F8F8] border border-[#D9D9D9] p-4 rounded-xl  mb-4">
            <p className="flex justify-between ">
              <span className="text-[#373737] font-semibold">Argument:</span>{" "}
              <span className="text-[14px] mt-1 text-[#7D7D7D]">
                09:00 to 13:00 | 09:00 to 13:00
              </span>
            </p>
            <p className="flex justify-between ">
              <span className="text-[#373737] font-semibold">Tomorrow:</span>{" "}
              <span className="text-[14px] mt-1 text-[#7D7D7D]">
                09:00 to 13:00 | 09:00 to 13:00
              </span>
            </p>
            <p className="flex justify-between ">
              <span className="text-[#373737] font-semibold">Saturday:</span>{" "}
              <span></span>
            </p>
            <p className="flex justify-between ">
              <span className="text-[#373737] font-semibold">Domingo:</span>{" "}
              <span></span>
            </p>
            <p className="flex justify-between ">
              <span className="text-[#373737] font-semibold">Monday:</span>{" "}
              <span className="text-[14px] mt-1 text-[#7D7D7D]">
                09:00 to 13:00 | 09:00 to 13:00
              </span>
            </p>
            <p className="flex justify-between ">
              <span className="text-[#373737] font-semibold">Tuesday:</span>{" "}
              <span className="text-[14px] mt-1 text-[#7D7D7D]">
                09:00 to 13:00 | 09:00 to 13:00
              </span>
            </p>
            <p className="flex justify-between ">
              <span className="text-[#373737] font-semibold">Wednesday:</span>{" "}
              <span className="text-[14px] mt-1 text-[#7D7D7D]">
                09:00 to 13:00 | 09:00 to 13:00
              </span>
            </p>
          </div>
          <div className="bg-[#F8F8F8] border border-[#D9D9D9] p-4 rounded-xl  mb-4">
            <p className="flex justify-between ">
              <span className="text-[#373737] font-semibold">Argument:</span>{" "}
              <span className="text-[14px] mt-1 text-[#7D7D7D]">08:00</span>
            </p>
            <p className="flex justify-between ">
              <span className="text-[#373737] font-semibold">Tomorrow:</span>{" "}
              <span className="text-[14px] mt-1 text-[#7D7D7D]">08:00</span>
            </p>
            <p className="flex justify-between ">
              <span className="text-[#373737] font-semibold">Saturday:</span>{" "}
              <span className="text-[14px] mt-1 text-[#7D7D7D]">08:00</span>
            </p>
            <p className="flex justify-between ">
              <span className="text-[#373737] font-semibold">Domingo:</span>{" "}
              <span className="text-[14px] mt-1 text-[#7D7D7D]">08:00</span>
            </p>
            <p className="flex justify-between ">
              <span className="text-[#373737] font-semibold">Monday:</span>{" "}
              <span className="text-[14px] mt-1 text-[#7D7D7D]">08:00</span>
            </p>
            <p className="flex justify-between ">
              <span className="text-[#373737] font-semibold">Tuesday:</span>{" "}
              <span className="text-[14px] mt-1 text-[#7D7D7D]">08:00</span>
            </p>
            <p className="flex justify-between ">
              <span className="text-[#373737] font-semibold">Wednesday:</span>{" "}
              <span className="text-[14px] mt-1 text-[#7D7D7D]">08:00</span>
            </p>
          </div>
        </div>

        {/* Footer Navigation */}
        <div
          className="fixed bottom-0 left-0 right-0 bg-[#FFFFFF] p-4 flex justify-around 
        shadow-md rounded-b-2xl"
        >
          <button className="text-green-500">
            <img src={Homeicon} alt="" />
          </button>
          <button className="text-gray-400">
            <img src={Carticon} alt="" />
          </button>
          <button className="text-gray-400">
            <img src={Ticketicon} alt="" />
          </button>
          <button className="text-gray-400">
            <img src={Notification} alt="" />
          </button>
          <button className="text-gray-400">
            <img src={Profileicon} alt="" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Employee;
