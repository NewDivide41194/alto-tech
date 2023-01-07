import {
  Action,
  configureStore,
  ThunkAction,
} from '@reduxjs/toolkit';
import counterReducer from '../feature/counter/counterSlice';
import myReducer from '../feature/counter/altoSlice';


export const store = configureStore({
  reducer: {
    counter: counterReducer,
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