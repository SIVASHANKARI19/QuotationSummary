
import { configureStore } from '@reduxjs/toolkit';
import unitsReducer  from './PricingSlice';

  const store = configureStore({
  reducer: {
  units:unitsReducer,
  },
});
export default store;
