import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store/store";

export type AppState = {
  isOpen: boolean;
  notiOpen: boolean;
  isChatRoom: boolean;
  selectedPage: string;
  text: string;
  message: [];
};

const initialState: AppState = {
  isOpen: false,
  notiOpen: false,
  isChatRoom: false,
  selectedPage: "Home",
  text: "",
  message: [],
};

export const appSlice = createSlice({
  name: "appSlice",
  initialState,

  reducers: {
    sideBarShowHide: (state) => {
      state.isOpen = !state.isOpen;
      state.notiOpen = false;
      state.isChatRoom =false

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
      state.message = action.payload;
    },
    removeText: (state) => {      
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
  removeText,
} = appSlice.actions;

export const selectSideBar = (state: RootState) => state.app.isOpen;
export const selectNoti = (state: RootState) => state.app.notiOpen;
export const selectSideBarMenu = (state: RootState) => state.app.selectedPage;
export const selectChatRoom = (state: RootState) => state.app.isChatRoom;
export const selectText = (state: RootState) => state.app.text;
export const selectMessage = (state: RootState) => state.app.message;

export default appSlice.reducer;
