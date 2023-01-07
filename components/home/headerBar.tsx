import Image from "next/image";
import React, { useState } from "react";
import LogoWhite from "../../public/images/logo_white.png";
import IconNoti from "../../public/images/Icon-Notification.png";
import IconBurger from "../../public/icons/icon-burger.svg";

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

  console.log("=======>", isOpen);
  const notiData = true;
  const dispatch = useAppDispatch();

  return (
    <div className="flex justify-between p-4">
      <div
        className="cursor-pointer"
        onClick={() => dispatch(sideBarShowHide())}
      >
        {isOpen || <Image alt="Icon_sidebar" src={IconBurger} height={20} />}
      </div>
      <Image alt="Logo_white" src={LogoWhite} />
      <div
        className="relative cursor-pointer"
        onClick={() => dispatch(notiShowHide())}
      >
        <Image alt="Icon_noti" src={IconNoti} />
        {notiData && (
          <div className="bg-orange w-2 h-2 absolute top-0 right-0 rounded-full" />
        )}
      </div>
      {isNotiOpen && (
        <div className="absolute top-10 right-8 bg-gray p-4 z-40 rounded-lg">
          <p className="font-bold">Notifications</p>
        </div>
      )}
    </div>
  );
};