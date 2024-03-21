import Image from "next/image";
import React from "react";
import { FaRegHeart } from "react-icons/fa6";
import { LuEye } from "react-icons/lu";
import { GoComment } from "react-icons/go";
import { IoShareSocialOutline } from "react-icons/io5";

const DiscussionCard = () => {
  return (
    <div className="flex flex-col gap-10">
      {[1, 2, 3, 4, 5, 6, 7].map((_, index) => {
        return (
          <div
            className="bg-gray-50 flex md:px-6 px-2 py-4 md:gap-5 gap-2 shadow-lg"
            key={index}
          >
            <div className="sm:block hidden">
              <Image src="/user.png" alt="user" height={50} width={50} />
            </div>
            <div className=" flex-1">
              <div className="flex sm:gap-5 gap-2 items-center">
                <p className="font-semibold sm:text-base text-sm">
                  Lorem Ipsum
                </p>
                <button className="text-white bg-sky-900 md:px-4 px-3 py-1 rounded-full hover:bg-blue-950 transition-colors ease-in-out duration-500 md:text-sm text-xs">
                  Sector 2
                </button>
              </div>

              <p className="py-2 text-gray-800 md:leading-5 leading-4 md:text-base sm:text-sm text-xs">
                Lorem ipsum dolor sit amet consectetur adipi sicing elit. Sequi
                modi, alias, temporibus dolore totam laboriosam necessitatibus
                perspiciatis amet laborum odit, a maiores est earum neque!
              </p>
              <div className="grid md:grid-cols-4 grid-cols-2 flex-wrap">
                <div className="flex items-center gap-2">
                  <FaRegHeart className="md:text-xl text-md" />
                  <span className="md:text-sm text-xs font-semibold">2k</span>
                </div>
                <div className="flex items-center gap-2">
                  <LuEye className="md:text-xl text-md" />
                  <span className="md:text-sm text-xs font-semibold">2k</span>
                </div>{" "}
                <div className="flex items-center gap-2">
                  <GoComment className="md:text-xl text-md" />
                  <span className="md:text-sm text-xs font-semibold">
                    2k Comments
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <IoShareSocialOutline className="md:text-xl text-md" />
                  <span className="md:text-sm text-xs font-semibold">
                    Share
                  </span>
                </div>
              </div>
            </div>
            <div className="">
              <p className="text-blue-600 md:text-sm text-xs sm:block hidden">
                2 min ago
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DiscussionCard;
