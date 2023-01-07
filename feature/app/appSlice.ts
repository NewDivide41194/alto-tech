import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store/store";

export type CounterState = {
  isOpen: boolean;
  notiOpen: boolean;
  isChatRoom: boolean;
  selectedPage: string;
};

const initialState: CounterState = {
  isOpen: false,
  notiOpen: false,
  isChatRoom: false,
  selectedPage: "Home",
};

export const sideBarSlice = createSlice({
  name: "my_Slice",
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
      state.notiOpen = false;
    },
    sideBarMenuSelect: (state, action: PayloadAction<string>) => {
      state.selectedPage = action.payload;
    },
  },
});

export const {
  sideBarShowHide,
  notiShowHide,
  chatRoomShowHide,
  sideBarMenuSelect,
} = sideBarSlice.actions;

// calling the above actions would be useless if we could not access the data in the state. So, we use something called a selector which allows us to select a value from the state.
export const selectSideBar = (state: RootState) => state.sideBar.isOpen;
export const selectNoti = (state: RootState) => state.sideBar.notiOpen;
export const selectSideBarMenu = (state: RootState) =>
  state.sideBar.selectedPage;
export const selectChatRoom = (state: RootState) => state.sideBar.isChatRoom;

// exporting the reducer here, as we need to add this to the store
export default sideBarSlice.reducer;
