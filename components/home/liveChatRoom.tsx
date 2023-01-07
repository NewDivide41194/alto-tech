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
  selectText,
  textUpdate,
} from "../../feature/app/appSlice";
import { push, child, ref, set, onValue } from "firebase/database";
import { database } from "../../firebase/app";

export const ChatRoom = () => {
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
          <FontAwesomeIcon
            icon={faTimes}
            className="text-[20px] text-white pl-[6px] pt-[3px]"
          />
        ) : (
          <Image alt="bed" src={IconLiveChat} />
        )}
      </div>
    </div>
  );
};

const PopupChatRoom = () => {
  const text = useAppSelector(selectText);
  const dispatch = useAppDispatch();

  const _handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const timestamp = Date.now();
    const message = text;
    // const messageInput=document.getElementById("message-input")
    // const message=messageInput.
    // db.ref("messages/" + timestamp).set({

    //   message
    // });
    const dbRef = ref(database, "message/");
    push(dbRef, { name: "client", message }).then(() => {
      console.log("Data added");
    });
    onValue(dbRef, (snapshot) => {
      const data = snapshot.val();
      console.log(",,,,", data);
    });
  };

  return (
    <div className="bg-gray w-[240px] rounded-md drop-shadow-lg">
      <div className="bg-blue text-white rounded-t-md p-2 space-x-2">
        <FontAwesomeIcon icon={faCircle} className="text-green text-[12px]" />
        <span>Live Chat</span>
      </div>
      <MessageHistory />
      <div className="h-[300px]">
        <div className="flex bottom-0 absolute p-2 space-x-2">
          <input
            id="message-input"
            type="text"
            onChange={(e) => dispatch(textUpdate(e.target.value))}
            value={text}
            className="rounded-full p-2 w-5/6"
            placeholder="Message"
          />
          <span
            className="p-1 text-lg w-1/6 text-blue cursor-pointer"
            onClick={_handleSubmit}
          >
            <FontAwesomeIcon icon={faPaperPlane} />
          </span>
        </div>
      </div>
    </div>
  );
};

const MessageHistory = () => {
  return (
    <div className="flex m-2 justify-end">
      <span className="p-1 bg-white rounded-full">Hello</span>
    </div>
  );
};
