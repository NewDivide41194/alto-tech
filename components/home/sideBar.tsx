import Image from "next/image";
import { useState } from "react";
import CompanyLogo_Circle from "../../public/images/logo_circle.png";
import CompanyLogo from "../../public/images/logo.png";

import {
  selectSideBarMenu,
  sideBarMenuSelect,
} from "../../feature/app/appSlice";
import { useAppDispatch, useAppSelector } from "../../hooks";

export const Sidebar=()=> {
  const dispatch = useAppDispatch();
  const selectPage = useAppSelector(selectSideBarMenu);

  const sideBarData = [
    {
      name: "Home",
      imgURL: require("public/images/Icon-Home.png"),
    },

    {
      name: "My Booking & Order",
      imgURL: require("public/images/Icon-Booking.png"),
    },
    {
      name: "Notification",
      imgURL: require("public/images/Icon-Notification.png"),
    },
  ];

  const selectedLanguage = {
    name: "English",
    imgURL: require("public/images/English.png"),
  };

  return (
    <div className={`sticky top-0 h-screen bg-gray-800 shadow`}>
      <div className="space-y-3">
        <div className="flex justify-center bg-blue min-h-[280px]">
          <div className="flex flex-col my-auto">
            <Image alt="Logo" src={CompanyLogo_Circle} />
            <div className="text-center text-white pt-8">Room 301</div>
          </div>
        </div>
        <div className="flex-1">
          <ul className="pt-2 pb-4 space-y-1 text-sm">
            {sideBarData.map((v, k) => (
              <li
                key={k}
                className="rounded-sm"
                onClick={() => dispatch(sideBarMenuSelect(v.name))}
              >
                <a
                  href="#"
                  className="flex items-center p-2 space-x-3 rounded-md"
                >
                  <Image alt="Logo" src={v.imgURL} />
                  <span
                    className={`${
                      selectPage === v.name
                        ? "text-blue font-bold"
                        : "text-gray"
                    } text-lg`}
                  >
                    {v.name}
                  </span>
                </a>
              </li>
            ))}
            <li className="rounded-sm">
              <a
                href="#"
                className="flex justify-between p-2 space-x-3 rounded-md text-lg"
              >
                <span className="flex space-x-3">
                  <Image alt="Logo" src={selectedLanguage.imgURL} />
                  <span className="text-gray-100">{selectedLanguage.name}</span>
                </span>

                <span className="text-blue">Change</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <SideBarFooter />
    </div>
  );
}

const SideBarFooter = () => {
  return (
    <div className="flex justify-between w-full absolute pb-8 bottom-0 px-3">
      <Image alt="Logo" src={CompanyLogo} />
      <span className="text-darkGray text-sm">Version 1.0.0</span>
    </div>
  );
};
