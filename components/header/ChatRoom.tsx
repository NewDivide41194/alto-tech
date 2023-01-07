import Image from "next/image";
import IconLiveChat from "../../public/images/Icon-LiveChat.png";
import {
  faPaperPlane,
  faCircle,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAppDispatch, useAppSelector } from "../../hooks";
import {
  chatRoomShowHide,
  selectChatRoom,
} from "../../feature/counter/altoSlice";

const ChatRoom = () => {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector(selectChatRoom);
  return (
    <div className="flex fixed bottom-8 right-8 items-end space-x-2">
      {isOpen && <PopupChatRoom />}
      <div
        className="bg-blue rounded-full px-3 pt-3 cursor-pointer w-[50px] h-[50px]"
        onClick={() => dispatch(chatRoomShowHide())}
      >
        {isOpen ? (
          <FontAwesomeIcon icon={faTimes} className="text-[20px] text-white pl-[6px] pt-[3px]" />
        ) : (
          <Image alt="bed" src={IconLiveChat} />
        )}
      </div>
    </div>
  );
};

export default ChatRoom;

const PopupChatRoom = () => {
  return (
    <div className="bg-gray w-[240px] rounded-md drop-shadow-lg">
      <div className="bg-blue text-white rounded-t-md p-2 space-x-2">
        <FontAwesomeIcon icon={faCircle} className="text-green text-[12px]" />
        <span>Live Chat</span>
      </div>
      <div className="h-[300px]">
        <div className="flex bottom-0 absolute p-2 space-x-2">
          <input
            type="text"
            value={""}
            className="rounded-full p-2 w-5/6"
            placeholder="Message"
          />
          <span className="bg-blue rounded-full p-2 w-[20px] w-1/6 text-white">
            <FontAwesomeIcon icon={faPaperPlane} />
          </span>
        </div>
      </div>
    </div>
  );
};
