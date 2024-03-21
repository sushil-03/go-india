import React from "react";
import { FaUser } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { MdOutlineChat } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";
import { SideBarProps } from "@/types.ds";

const data = [
  {
    icon: MdOutlineChat,
    name: "Disscussion Forum",
    isMore: true,
  },
  {
    icon: RiMoneyDollarCircleFill,
    name: "Market Stories",
  },
  {
    name: "Sentiment",
  },
  {
    name: "Market",
  },
  {
    name: "Sector",
  },
  {
    name: "Watchlist",
  },
  {
    name: "Events",
  },
  {
    name: "News/Interview",
  },
];

const SideBar = ({ showSideBar, setShowSideBar }: SideBarProps) => {
  return (
    <div className={` h-screen   md:w-60 w-52 bg-sky-950 left-0 top-0 z-50`}>
      <div className="text-white">
        <div className="sm:px-4 px-2 py-4 flex justify-between items-center border-b">
          <div className="flex sm:gap-3 gap-1 items-center">
            <FaUser className="text-white md:text-xl sm:text-lg text-md" />
            <p className="md:text-base text-sm">Hello, User</p>
          </div>
          <div>
            <IoIosNotifications size={20} />
          </div>
        </div>
        <div className="md:text-base text-sm mt-5 sm:px-4 px-2 flex flex-col gap-1">
          {data.map((data, index) => {
            return (
              <div
                className="hover:bg-sky-900 py-2 cursor-pointer flex justify-between items-center"
                key={index}
              >
                <div className="flex items-center gap-2">
                  {data.icon ? <data.icon /> : <div className="w-3"></div>}
                  <span>{data.name}</span>
                </div>
                {data.isMore && (
                  <div>
                    <IoMdArrowDropdown />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
