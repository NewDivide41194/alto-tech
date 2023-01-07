import { useState } from "react";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useAppDispatch, useAppSelector } from "../hooks";
import { selectSideBar, sideBarShowHide } from "../feature/app/appSlice";
import {
  Header,
  MenuBar,
  Carousel,
  Sidebar,
  Overlay,
  ServiceGallery,
  ChatRoom,
} from "../components/home";

const IndexPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const [incrementAmount, setIncrementAmount] = useState<number>(0);
  const isOpen = useAppSelector(selectSideBar);

  return (
    <>
      <div className="grid grid-cols-6 overflow-x-hidden">
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
                onClick={() => dispatch(sideBarShowHide())}
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

      {/*     
        <input
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(Number(e.target.value))}
          type="number"
        /> */}
    </>
  );
};

export default IndexPage;
