"use client";
import DiscussionForm from "@/components/DiscussionForm";
import MarketStories from "@/components/MarketStories";
import SideBar from "@/components/SideBar";
import TopNavigation from "@/components/TopNavigation";
import { Active } from "@/types.ds";
import { useState } from "react";
import { IoMdArrowDropright } from "react-icons/io";

export default function Home() {
  const [showSideBar, setShowSideBar] = useState<boolean>(false);
  const [activeScreen, setActiveScreen] = useState<Active>(Active.discussion);

  return (
    <main className="relative overflow-hidden h-screen">
      <div
        className={`flex lg:gap-10 gap-0  lg:pr-5  ${
          !showSideBar && "lg:pl-5"
        }`}
      >
        <div
          className={`
        ${showSideBar ? " block " : "hidden"}`}
        >
          <SideBar showSideBar={showSideBar} setShowSideBar={setShowSideBar} />
        </div>
        <div>
          <TopNavigation
            activeScreen={activeScreen}
            setActiveScreen={setActiveScreen}
          />
          <div className="flex md:gap-10 gap-5 ">
            <DiscussionForm
              activeScreen={activeScreen}
              showSideBar={showSideBar}
            />
            <MarketStories activeScreen={activeScreen} />
          </div>
        </div>
      </div>
      <div
        className={`absolute top-1/2 transform -translate-y-1/2 md:w-60 w-44 ${
          showSideBar ? "md:left-[15rem] left-[13rem]" : "left-0"
        }`}
      >
        <div
          className="w-4 h-28 bg-sky-950 flex items-center cursor-pointer"
          onClick={() => setShowSideBar(!showSideBar)}
        >
          <IoMdArrowDropright className="text-white text-3xl" size={50} />
        </div>
      </div>
    </main>
  );
}
