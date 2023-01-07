import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import {
  decrement,
  increment,
  incrementByAmount,
  selectCount,
} from "../feature/counter/counterSlice";
import Header from "../components/header/headerBar";
import MenuBar from "../components/header/menuBar";
import ServiceGallery from "../components/header/serviceGallery";
import SideBar from "../components/header/sideBar";
import { selectSideBar, sideBarShowHide } from "../feature/counter/altoSlice";
import Carousel from "../components/header/carousel";
import Overlay from "../components/header/overlay";
import ChatRoom from "../components/header/ChatRoom";
import IconClose from "../public/icons/icon-close.svg";
// import { sideBarShowHide } from "../../feature/counter/altoSlice";
import Image from "next/image";

const IndexPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const count = useAppSelector(selectCount);
  const [incrementAmount, setIncrementAmount] = useState<number>(0);
  const isOpen = useAppSelector(selectSideBar);

  return (
    <>
      <div className="grid grid-cols-6 overflow-x-hidden">
        {isOpen ? (
          <div className="lg:col-span-2 md:col-span-2 xs:col-span-4">
            <SideBar />
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
              <Image
                onClick={() => dispatch(sideBarShowHide())}
                className="absolute z-50 cursor-pointer top-8 left-4"
                alt="Icon_sidebar"
                src={IconClose}
                height={20}
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

      {/* <h1>Welcome to the greatest app in the world!</h1>
      <h2>
        The current number is
        {count}
      </h2>
      <div>
        <input
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(Number(e.target.value))}
          type="number"
        />
        <button
          onClick={() =>        dispatch(incrementByAmount(Number(incrementAmount)))}
        >
          Increment by amount
        </button>
      </div>
      <div>
        <button onClick={() => dispatch(decrement())}>Decrement by 1</button>
        <button onClick={() => dispatch(increment())}>Increment by 1</button>
      </div> */}
    </>
  );
};

export default IndexPage;
