// pricingSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  pricingData: {},
};

const pricingSlice = createSlice({
  name: 'pricing',
  initialState,
  reducers: {
    setPricingData: (state, action) => {
      const { title, selectedValues } = action.payload;
      state.pricingData[title] = selectedValues;  // Store the values associated with the title
    },
  },
});

export const { setPricingData } = pricingSlice.actions;
export default pricingSlice.reducer;
