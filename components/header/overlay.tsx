import { sideBarShowHide } from "../../feature/counter/altoSlice";
import { useAppDispatch } from "../../hooks";

const Overlay = () => {
  const dispatch = useAppDispatch();
  return (
    <div
      className="block absolute h-full top-0 left-0 bottom-0 right-0 bg-black opacity-50 z-30"
      onClick={() => dispatch(sideBarShowHide())}
    />
  );
};

export default Overlay;
