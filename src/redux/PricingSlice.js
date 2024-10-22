import { createSlice } from '@reduxjs/toolkit';

// Initial state of the units slice
const initialState = {
  units: [],
  count: 0,
  totalAmt: 0, // Initialize total amount
  selectedAmenities: [],
  totalAmenities: 0 ,
  totalAmenitiesPrice: 0// Track selected amenities
};

const unitsSlice = createSlice({
  name: 'units',
  initialState,
  reducers: {
    setUnits: (state, action) => {
      state.units = action.payload;
      state.count = state.units.length;

      // Calculate total amount
      state.totalAmt = state.units.reduce((total, unit) => {
        const price = parseFloat(unit.price.replace(/[$,]/g, ''));
        return total + price;
      }, 0);
    },
    deleteUnit: (state, action) => {
      const unitId = action.payload;

      // Remove the unit from the state
      state.units = state.units.filter(unit => unit.id !== unitId);
      state.count = state.units.length;

      // Recalculate total amount based on remaining units
      state.totalAmt = state.units.reduce((total, unit) => {
        const price = parseFloat(unit.price.replace(/[$,]/g, ''));
        return total + price;
      }, 0);
    },
    setTotalAmt: (state, action) => {
      const newValue = action.payload;
      state.totalAmt += newValue; // Add the new value to the existing totalAmt
    },
    setSelectedAmenities: (state, action) => {
      state.selectedAmenities = action.payload;

      // Recalculate total amenities and total price
      state.totalAmenities = state.selectedAmenities.length;
      state.totalAmenitiesPrice = state.selectedAmenities.reduce((total, item) => {
        return total + parseFloat(item.price.replace(/[$,]/g, ''));
      }, 0);
    },
    addSelectedAmenity: (state, action) => {
      const amenity = action.payload;
      if (!state.selectedAmenities.find(item => item.id === amenity.id)) {
        state.selectedAmenities.push(amenity);

        // Increase total amenities and total price
        state.totalAmenities += 1;
        state.totalAmenitiesPrice += parseFloat(amenity.price.replace(/[$,]/g, ''));
      }
    },
    removeSelectedAmenity: (state, action) => {
      const amenityId = action.payload;
      const amenity = state.selectedAmenities.find(item => item.id === amenityId);
      if (amenity) {
        // Decrease total amenities and total price
        state.totalAmenities -= 1;
        state.totalAmenitiesPrice -= parseFloat(amenity.price.replace(/[$,]/g, ''));

        // Remove the amenity
        state.selectedAmenities = state.selectedAmenities.filter(
          item => item.id !== amenityId
        );
      }
    },
    totalAmenities: state => state.selectedAmenities.length,
    totalAmenitiesPrice: state => {
      return state.selectedAmenities.reduce((total, item) => {
        const price = parseFloat(item.price.replace(/[$,]/g, ''));
        return total + price;
      }, 0);
    }
  }
});

// Export actions for use in components
export const {
  setUnits,
  deleteUnit,
  setTotalAmt,
  setSelectedAmenities,
  addSelectedAmenity,
  removeSelectedAmenity,
  totalAmenities,
  totalAmenitiesPrice
} = unitsSlice.actions;

export default unitsSlice.reducer;
