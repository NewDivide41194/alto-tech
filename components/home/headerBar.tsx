import Image from "next/image";
import React, { useState } from "react";
import { faBars, faBell, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LogoWhite from "../../public/images/logo_white.png";
import IconNoti from "../../public/images/Icon-Notification.png";

import { useAppDispatch, useAppSelector } from "../../hooks";

import {
  notiShowHide,
  selectNoti,
  selectSideBar,
  sideBarShowHide,
} from "../../feature/app/appSlice";

export const Header = () => {
  const isOpen = useAppSelector(selectSideBar);
  const notiOpen = useAppSelector(selectNoti);
  const isNotiOpen = useAppSelector(selectNoti);

  const notiData = true;
  const dispatch = useAppDispatch();

  return (
    <div className="flex justify-between p-4">
      <div
        className="cursor-pointer"
        onClick={() => dispatch(sideBarShowHide())}
      >
        {isOpen || (
          <FontAwesomeIcon icon={faBars} className="text-white text-lg" />
        )}
      </div>
      <Image alt="Logo_white" src={LogoWhite} />
      <div
        className="relative cursor-pointer"
        onClick={() => dispatch(notiShowHide())}
      >
          <FontAwesomeIcon icon={faBell} className="text-white text-lg" />
        {notiData && (
          <div className="bg-orange w-2 h-2 absolute top-0 right-0 rounded-full" />
        )}
      </div>
      {isNotiOpen && <NotificationCard />}
    </div>
  );
};

const NotificationCard = () => {
  return (
    <div className="absolute top-10 right-8 bg-gray p-4 z-40 rounded-lg">
      <p className="font-bold">Notifications</p>
    </div>
  );
};
