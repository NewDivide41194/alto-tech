import {
  Action,
  configureStore,
  ThunkAction,
} from '@reduxjs/toolkit';
import myReducer from '../feature/app/appSlice';


export const store = configureStore({
  reducer: {
    sideBar:myReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;