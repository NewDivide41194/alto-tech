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
  getMessage,
  removeText,
  selectChatRoom,
  selectMessage,
  selectText,
  selectUser,
  textUpdate,
  updateMessage,
} from "../../feature/app/appSlice";
import { push, ref, onValue } from "firebase/database";
import { database } from "../../firebase/client";
import React, { useEffect } from "react";

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
  const userId = "h_3876201";
  // Use for conversation
  // const userId = "h_3876202";

  const timestamp = Date.now();
  const messageArr = useAppSelector(selectMessage);

  const dispatch = useAppDispatch();

  const dbRef = ref(database, `message`);

  const addMessage = () => {
    onValue(dbRef, (snapshot) => {
      const data = snapshot.val();

      const messages =
        data &&
        Object.keys(data).map((k) => ({
          id: k,
          userId:data[k].userId,
          message: data[k].message,
          timestamp: data[k].timestamp,
        }));
      dispatch(getMessage(messages));
    });
  };

  useEffect(() => {
    addMessage();
  }, []);

  const _handleSubmit = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.preventDefault();
    push(dbRef, { message: text, timestamp,userId }).then((data) => {});
    dispatch(updateMessage({ message: text, timestamp, userId }));
    dispatch(removeText());
  };
  console.log(messageArr);

  return (
    <div className="bg-gray w-[240px] rounded-md drop-shadow-lg max-h-[300px]">
      <div className="bg-blue text-white rounded-t-md p-2 space-x-2">
        <FontAwesomeIcon icon={faCircle} className="text-green text-[12px]" />
        <span>Live Chat</span>
      </div>
      <div className="max-h-[200px] overflow-x-auto">
        {messageArr?.length > 0 ? (
          messageArr.map((a, i) => (
            <div
              className={`flex m-2 ${
                a.userId === userId ? "justify-end" : "justify-start"
              }`}
              key={i}
            >
              <span className="p-1 bg-white rounded-md display-block text-ellipsis overflow-hidden">
                {a.message}
                <span className="text-darkGray text-xs"></span>
              </span>
            </div>
          ))
        ) : (
          <div className="text-darkGray text-center pt-2">No Message</div>
        )}
      </div>

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
