// menuSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeIndex: 0,
  personalData: {
    name: '',
    email: '',
    phone: '',
  },
  selectedPlan: null,
  selectedBillingFrequency: 'monthly',
  addOnsItems: [],
 
  
 
};

// Function to save the Redux state to local storage
const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('Data', serializedState);
  } catch (err) {
    // Handle errors here, e.g., log them
  }
};

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    getPersonalData: (state, action) => {
      state.personalData = action.payload;
    },
    setActiveIndex: (state, action) => {
      state.activeIndex = action.payload;
    },
    selectPlan: (state, action) => {
      state.selectedPlan = action.payload;
    },
    selectBillingFrequency: (state, action) => {
      state.selectedBillingFrequency = action.payload;
    },
    clearSelection: (state) => {
      state.selectedPlan = null;
      state.selectedBillingFrequency = 'monthly';
    },
    selectAddOns: (state, action) => {
      const itemExists = state.addOnsItems.some((item) => item.name === action.payload.name);
      if (!itemExists) {
        state.addOnsItems.push(action.payload);
        // Save the state to local storage whenever it changes
        saveState(state);
      }
    },
    removeSelectAddOns: (state, action) => {
      state.addOnsItems = state.addOnsItems.filter((item) => item.name !== action.payload.name);
      // Save the state to local storage whenever it changes
      saveState(state);
    },
   
  },
});

export const { getPersonalData, setActiveIndex,selectPlan, selectBillingFrequency, clearSelection,selectAddOns, removeSelectAddOns,clearSelectedAddOns } =
  menuSlice.actions;


export const selectActiveIndex = (state) => state.menu.activeIndex;
export const selectPersonalData = (state) => state.menu.personalData;

export default menuSlice.reducer;
