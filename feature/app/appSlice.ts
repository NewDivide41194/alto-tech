import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { onValue, ref } from "firebase/database";
// import { database } from "../../firebase/client";
import type { RootState } from "../../store/store";

export type AppState = {
  isOpen: boolean;
  notiOpen: boolean;
  isChatRoom: boolean;
  selectedPage: string;
  text: string;
  user: {};
  message: [];
};

const initialState: AppState = {
  isOpen: false,
  notiOpen: false,
  isChatRoom: false,
  selectedPage: "Home",
  text: "",
  user: { userId: "h_3876201", userName: "Hein" },
  message: [],
};

export const appSlice = createSlice({
  name: "appSlice",
  initialState,

  reducers: {
    sideBarShowHide: (state) => {
      state.isOpen = !state.isOpen;
      state.notiOpen = false;
    },
    notiShowHide: (state) => {
      state.notiOpen = !state.notiOpen;
    },
    chatRoomShowHide: (state) => {
      state.isChatRoom = !state.isChatRoom;
    },
    sideBarMenuSelect: (state, action: PayloadAction<string>) => {
      state.selectedPage = action.payload;
    },
    textUpdate: (state, action: PayloadAction<string>) => {
      state.text = action.payload;
    },

    getMessage: (state: any, action: PayloadAction<any>) => {
      console.log("-------------------", action.payload);
      state.message = action.payload;
      console.log(state.message);
    },
    updateMessage: (state: any, action: PayloadAction<any>) => {
      console.log("UUUUUUUUUUUUUU", action.payload);
    },
    removeText: (state) => {
      console.log("remove Text");
      
      state.text = "";
    },
  },
});

export const {
  sideBarShowHide,
  notiShowHide,
  chatRoomShowHide,
  sideBarMenuSelect,
  textUpdate,
  getMessage,
  updateMessage,
  removeText,
} = appSlice.actions;

// calling the above actions would be useless if we could not access the data in the state. So, we use something called a selector which allows us to select a value from the state.
export const selectSideBar = (state: RootState) => state.app.isOpen;
export const selectNoti = (state: RootState) => state.app.notiOpen;
export const selectSideBarMenu = (state: RootState) => state.app.selectedPage;
export const selectChatRoom = (state: RootState) => state.app.isChatRoom;
export const selectText = (state: RootState) => state.app.text;
export const selectUser = (state: RootState) => state.app.user;
export const selectMessage = (state: RootState) => state.app.message;

// exporting the reducer here, as we need to add this to the store
export default appSlice.reducer;
