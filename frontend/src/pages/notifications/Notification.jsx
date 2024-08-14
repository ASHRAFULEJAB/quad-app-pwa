import React from "react";
import FooterNavigation from "../FooterNavigation";
import { FiMenu, FiMoreVertical } from "react-icons/fi";
import search from "../../assets/images/search-normal.png";
import menuLeft from "../../assets/images/menu-left.png";
import unlock from "../../assets/images/unlock.png";
import notificationusers from "../../assets/images/users.png";
import speaker from "../../assets/images/speaker.png";
import ellapseNotification from "../../assets/images/EllipseNotification.png";
import staveNotification from "../../assets/images/Stavenotification.png";
import playCircle from "../../assets/images/play-cricle.png";
import { FaMagnifyingGlass } from "react-icons/fa6";

const notifications = [
  {
    icon: "profile",
    title: "You update your profile picture",
    description: "You just update your profile picture.",
    time: "Just Now",
  },
  {
    icon: "password",
    title: "Password Changed",
    description: "You’re completed change the password.",
    time: "April 12, 2023 at 22:22 PM",
  },
  {
    icon: "leave",
    title: "Mark Applied for Leave",
    description: "Please accept my leave request.",
    time: "February 23, 2023 at 21:22 PM",
    image: `${ellapseNotification}`, // Replace with an actual path to the image
  },
  {
    icon: "system",
    title: "System Update",
    description: "Please update to newest app, for get amazing experience.",
    time: "Just Now",
  },
  //   {
  //     icon: "video",
  //     title: "Stave share video",
  //     description: "You just update your profile picture.",
  //     time: "Just Now",
  //     image: `${ellapseNotification}`, // Replace with an actual path to the video thumbnail
  //   },
];

const iconMap = {
  profile: notificationusers,
  password: unlock,
  //   leave: leaveIcon,
  system: speaker,
  //   video: videoIcon,
};
const Notification = () => {
  return (
    <div>
      <div className=" bg-tranparent  rounded-b-lg ">
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
          <h1 className="text-xl font-semibold text-[#373737]">Notification</h1>

          {/* Notification Icon */}
          <div
            className="relative flex items-center justify-center 
           "
          >
            <FaMagnifyingGlass  className="mr-2 size-6"/>

            {/* <img src={search} alt="" className="h-7 w-7 mr-3 " /> */}
            {/* <FiBell className="text-xl text-gray-600" />
          <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-green-400 rounded-full"></span> */}
          </div>
        </div>

        {/* Search Bar */}
      </div>
      <div className="p-4 mb-10">
        {notifications.map((notification, index) => (
          <div key={index} className="mb-6">
            <div className="flex items-start justify-between">
              <div className="flex items-start">
                {/* Icon or Image */}
                {notification.image ? (
                  <img
                    src={notification.image}
                    alt="Notification Thumbnail"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                ) : (
                  <>
                    {/* Dynamic Image */}
                    <div
                      className="w-12 h-12 flex items-center justify-center rounded-full
                     bg-[#F1F6E7]"
                    >
                      <img
                        src={iconMap[notification.icon]}
                        alt={`${notification.icon} icon`}
                        className="w-6 h-6"
                      />
                    </div>
                  </>
                )}
              </div>

              <div className="flex-1 ml-4">
                <h3 className="text-gray-800 font-semibold text-sm">
                  {notification.title}
                </h3>
                <p className="text-gray-500 text-xs">
                  {notification.description}
                </p>
                <p className="text-[#8AB53E] text-xs mt-1">
                  {notification.time}
                </p>
              </div>

              <div className="ml-4">
                <FiMoreVertical className="text-gray-400" />
              </div>
            </div>

            {/* Horizontal Line */}
            {index < notifications.length - 1 && (
              <hr className="mt-4 border-[#D9D9D9]" />
            )}
          </div>
        ))}
        <hr className="mb-3 border-[#D9D9D9]" />
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            {/* Left Icon */}
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#F1F6E7]">
              <span className="text-3xl text-[#8AB53E]">
                <img src={notificationusers} alt="" />
              </span>
            </div>

            <div className="ml-4">
              <h3 className="text-gray-800 font-semibold text-sm">
                Stave share video
              </h3>
              <p className="text-gray-500 text-xs">
                You just update your profile picture.
              </p>
              <p className="text-[#8AB53E] text-xs mt-1">Just Now</p>
            </div>
          </div>

          {/* Right Thumbnail with Play Icon */}
          <div className="relative w-12 h-12 rounded-md overflow-hidden flex-shrink-0 ml-2">
            <img
              src={staveNotification}
              alt="Video Thumbnail"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white text-lg">
                <img src={playCircle} alt="" />
              </span>
            </div>
          </div>
          <div className="ml-4">
            <FiMoreVertical className="text-gray-400" />
          </div>
        </div>
        <hr className="mb-3 border-[#D9D9D9]" />
        {/* Password Changed Section */}
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center">
            {/* Left Icon */}
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#F1F6E7]">
              <span className="text-3xl text-red-500">
                <img src={unlock} alt="" />
              </span>
            </div>

            <div className="ml-4">
              <h3 className="text-gray-800 font-semibold text-sm">
                Password Changed
              </h3>
              <p className="text-gray-500 text-xs">
                You’re completed change the password.
              </p>
              <p className="text-[#8AB53E] text-xs mt-1">
                April 12, 2023 at 22:22 PM
              </p>
            </div>
          </div>

          {/* More Options Icon */}
          <div className="ml-4">
            <FiMoreVertical className="text-gray-400" />
          </div>
        </div>
      </div>
      <FooterNavigation />
    </div>
  );
};

export default Notification;
