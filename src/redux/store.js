// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import unitsReducer  from './PricingSlice'; // Import your slice or reducer

  const store = configureStore({
  reducer: {
  units:unitsReducer,
  },
});
export default store;
