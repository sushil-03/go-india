import { Active } from "@/types.ds";
import React from "react";
type TopNavigationProps = {
  activeScreen: Active;
  setActiveScreen: (val: Active) => void;
};
const TopNavigation = ({
  activeScreen,
  setActiveScreen,
}: TopNavigationProps) => {
  return (
    <div className="lg:hidden  flex  justify-between items-center md:text-base sm:text-sm text-xs">
      <button
        onClick={() => setActiveScreen(Active.discussion)}
        className={`flex-1  text-white  border-b-2 py-2 ${
          activeScreen === Active.discussion
            ? "bg-sky-900 border-red-500"
            : "bg-sky-800 border-transparent"
        }`}
      >
        Discussion Forum
      </button>
      <button
        onClick={() => setActiveScreen(Active.market)}
        className={`flex-1  text-white  border-b-2 py-2 ${
          activeScreen === Active.market
            ? "bg-sky-900 border-b-2 border-red-500"
            : "bg-sky-800 border-transparent"
        }`}
      >
        Market Stories
      </button>
    </div>
  );
};

export default TopNavigation;
