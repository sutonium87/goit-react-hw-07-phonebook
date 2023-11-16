// Import necessary dependencies
import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

// Define the initial state for the contacts slice
const initialState = {
  contacts: {
    items: [],
    isLoading: true,
    error: null,
  },
};

// Define reducers for handling pending and rejected states
const handlePending = state => {
  state.contacts.isLoading = true;
};

const handleRejected = (state, action) => {
  state.contacts.isLoading = false;
  state.contacts.error = action.payload;
};

// Create the contacts slice using createSlice
const contactBookSlice = createSlice({
  name: 'contacts',
  initialState: initialState,
  extraReducers: {
    // Handle pending, fulfilled, and rejected states for fetching contacts
    [fetchContacts.pending]: handlePending,
    [fetchContacts.fulfilled](state, action) {
      state.contacts.items = action.payload;
      state.contacts.isLoading = false;
      state.contacts.error = null;
    },
    [fetchContacts.rejected]: handleRejected,

    // Handle pending, fulfilled, and rejected states for adding a contact
    [addContact.pending]: handlePending,
    [addContact.fulfilled](state, action) {
      state.contacts.items = [...state.contacts.items, action.payload];
      state.contacts.isLoading = false;
      state.contacts.error = null;
    },
    [addContact.rejected]: handleRejected,

    // Handle pending, fulfilled, and rejected states for deleting a contact
    [deleteContact.pending]: handlePending,
    [deleteContact.fulfilled](state, action) {
      state.contacts.items = state.contacts.items.filter(
        contact => contact.id !== action.payload.id
      );
      state.contacts.isLoading = false;
      state.contacts.error = null;
    },
    [deleteContact.rejected]: handleRejected,
  },
});

// Export actions and reducer from the contacts slice
export const { addContacts, deleteContacts } = contactBookSlice.actions;
export const contactBookReducer = contactBookSlice.reducer;
