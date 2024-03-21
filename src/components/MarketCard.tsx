import Image from "next/image";
import React from "react";

const MarketCard = () => {
  return (
    <div className="flex flex-col gap-10 ">
      {[1, 2, 3, 4, 5].map((_, index) => {
        return (
          <div className="border" key={index}>
            <div className="relative w-full  h-52">
              <Image src="/background.jpg" fill alt="background " />
            </div>
            <div className="px-3 py-2">
              <p className="text-base font-semibold text-gray-600 py-2">
                The Coldest Sunset
              </p>
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                doloremque omnis totam sequi aut dolore quaerat! Labore sapiente
                vero odio deleniti rerum vel consectetur repellat reiciendis,
                ipsam earum quia quisquam?
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MarketCard;
