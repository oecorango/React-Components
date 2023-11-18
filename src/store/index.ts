import { configureStore } from '@reduxjs/toolkit';
import peopleReducer from './peopleSlice';
import personReducer from './personSlice';

export const store = configureStore({
  reducer: {
    people: peopleReducer,
    person: personReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
