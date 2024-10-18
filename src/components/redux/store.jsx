// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import yourReducer from './slices/yourSlice'; // Import your slice or reducer

export const store = configureStore({
  reducer: {
    yourState: yourReducer,  // Add your slice or reducers here
  },
});
