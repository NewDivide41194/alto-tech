import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import { useAppDispatch, useAppSelector } from "../hooks";
import { selectSideBar, sideBarShowHide } from "../feature/app/appSlice";
import PushNotificationLayout from "../components/home/PushNotificationLayout";

import {
  Header,
  MenuBar,
  Carousel,
  Sidebar,
  Overlay,
  ServiceGallery,
  ChatRoom,
} from "../components/home";
import { useEffect } from "react";

const IndexPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector(selectSideBar);
  
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <PushNotificationLayout>
      <div className="grid grid-cols-6 overflow-x-hidden ">
        {isOpen ? (
          <div className="lg:col-span-2 md:col-span-2 xs:col-span-4">
            <Sidebar />
          </div>
        ) : null}
        <div
          className={`relative ${
            isOpen ? "lg:col-span-4 md:col-span-4 xs:col-span-2" : "col-span-6"
          } min-w-[390px] `}
        >
          {isOpen && (
            <>
              <Overlay />
              <FontAwesomeIcon
                icon={faTimes}
                className="absolute z-50 cursor-pointer top-8 left-4 text-lg text-white"
                onClick={() => {
                  dispatch(sideBarShowHide());
                }}
              />
            </>
          )}

          <div className=" bg-blue h-[280px]">
            <Header />
            <Carousel />
          </div>
          <div className="mt-8">
            <MenuBar />
            <ServiceGallery />
          </div>
        </div>
        <ChatRoom />
      </div>
    </PushNotificationLayout>
  );
};

export default IndexPage;
