import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import LogoWhite from "../../public/images/logo_white.png";
import IconNoti from "../../public/images/Icon-Notification-White.png";

import { useAppDispatch, useAppSelector } from "../../hooks";
import {
  notiShowHide,
  selectNoti,
  selectSideBar,
  sideBarShowHide,
} from "../../feature/app/appSlice";

export const Header = () => {
  const isOpen = useAppSelector(selectSideBar);
  const isNotiOpen = useAppSelector(selectNoti);

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
        <Image alt="Logo_white" src={IconNoti} />
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
