// Import necessary dependencies
import { createSlice } from '@reduxjs/toolkit';

// Define the initial state for the filter slice
const filterInitialState = {
  filter: '',
};

// Create the filter slice using createSlice
const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    // Define the filterContacts reducer and prepare function
    filterContacts: {
      reducer(state, action) {
        state.filter = action.payload.filter;
      },
      prepare(filter) {
        return {
          payload: {
            filter,
          },
        };
      },
    },
  },
});

// Export the reducer and actions from the filter slice
export const filterReducer = filterSlice.reducer;
export const { filterContacts } = filterSlice.actions;
