import Image from "next/image";
import React from "react";
import { FaRegHeart } from "react-icons/fa6";
import { LuEye } from "react-icons/lu";
import { GoComment } from "react-icons/go";
import { IoShareSocialOutline } from "react-icons/io5";
import { Active } from "@/app/page";
import DiscussionCard from "./DiscussionCard";

type DiscussionProps = {
  showSideBar: boolean;
  activeScreen: Active;
};
const DiscussionForm = ({ showSideBar, activeScreen }: DiscussionProps) => {
  return (
    <div
      className={`${
        showSideBar ? " lg:w-3/5" : "lg:w-3/4"
      } w-full h-screen overflow-y-scroll md:py-10 pb-10 lg:block 
        ${activeScreen === Active.discussion ? "block" : "hidden"} `}
    >
      <div className="mb-5">
        <span className=" text-3xl   text-[#d16974] bg-gray-200 uppercase font-semibold p-2 lg:block hidden">
          Disscussion Forum
        </span>
      </div>
      <DiscussionCard />
    </div>
  );
};

export default DiscussionForm;
