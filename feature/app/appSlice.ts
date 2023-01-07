import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store/store";

export type CounterState = {
  isOpen: boolean;
  notiOpen: boolean;
  isChatRoom: boolean;
  selectedPage: string;
  text:string
};

const initialState: CounterState = {
  isOpen: false,
  notiOpen: false,
  isChatRoom: false,
  selectedPage: "Home",
  text:""
};

export const sideBarSlice = createSlice({
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
  },
});

export const {
  sideBarShowHide,
  notiShowHide,
  chatRoomShowHide,
  sideBarMenuSelect,
  textUpdate
} = sideBarSlice.actions;

// calling the above actions would be useless if we could not access the data in the state. So, we use something called a selector which allows us to select a value from the state.
export const selectSideBar = (state: RootState) => state.app.isOpen;
export const selectNoti = (state: RootState) => state.app.notiOpen;
export const selectSideBarMenu = (state: RootState) =>
  state.app.selectedPage;
export const selectChatRoom = (state: RootState) => state.app.isChatRoom;
export const selectText = (state: RootState) => state.app.text;


// exporting the reducer here, as we need to add this to the store
export default sideBarSlice.reducer;
