import Image from "next/image";
import React from "react";
import Bed from "../../public/images/Icon-Bed.png";
import Key from "../../public/images/Icon-VirtualKey.png";
import Wifi from "../../public/images/Icon-Wifi.png";

export const MenuBar = () => {
  return (
    <div className="p-6">
      <div className="font-bold pb-4 text-xl">Good evening, Mr.Joe</div>
      <div className="flex justify-around flex-wrap text-blue xs:text-sm sm:text-base text-blue">
        <div className="flex flex-col items-center text-center xs:max-w-[50px] md:max-w-[200px]">
          <div className="bg-blue rounded-full px-3 pt-3 w-[50px] h-[50px] ">
            <Image alt="key" src={Key} />
          </div>

          <span>Virtual Key</span>
        </div>
        <div className="flex flex-col items-center text-center xs:max-w-[50px] md:max-w-[200px]  ">
          <div className="bg-blue rounded-full px-3 pt-4 w-[50px] h-[50px]">
            <Image alt="bed" src={Bed} />
          </div>
          <span>Smart Room</span>
        </div>
        <div className="flex flex-col items-center text-center xs:max-w-[50px] md:max-w-[200px]">
          <div className="bg-blue rounded-full px-3 pt-3 w-[50px] h-[50px]">
            <Image alt="wifi" src={Wifi} />
          </div>
          <span>Wifi</span>
        </div>
        <div className="flex flex-col items-center text-center xs:max-w-[50px] md:max-w-[200px]">
          <div className="bg-blue rounded-full px-3 pt-3 w-[50px] h-[50px]">
            <Image alt="key" src={Key} />
          </div>
          <span>Hotel Information </span>
        </div>
      </div>
    </div>
  );
};
