import React from "react";
import MarketCard from "./MarketCard";
import { Active } from "@/types.ds";

const MarketStories = ({ activeScreen }: { activeScreen: Active }) => {
  return (
    <div
      className={`lg:w-1/3 w-full overflow-y-scroll max-h-screen md:py-10  pb-10 lg:block
        ${activeScreen === Active.market ? "block" : "hidden"}
        `}
    >
      <div className="mb-5">
        <span className=" text-xl   text-[#d16974] bg-gray-200 uppercase font-semibold p-2 lg:block hidden">
          Market Stories
        </span>
      </div>
      <MarketCard />
    </div>
  );
};

export default MarketStories;
