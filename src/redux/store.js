// Import necessary dependencies
import { configureStore } from '@reduxjs/toolkit';
import { contactBookReducer } from './contactBookSlice';
import { filterReducer } from './filterSlice';

// Configure the Redux store with combined reducers
export const store = configureStore({
  reducer: {
    contacts: contactBookReducer, // Reducer for managing contact-related state
    filter: filterReducer, // Reducer for managing filter-related state
  },
});
