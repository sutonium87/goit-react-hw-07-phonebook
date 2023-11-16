// Import necessary dependencies
import { createAsyncThunk } from '@reduxjs/toolkit';
import { phoneApi } from 'api/api';

// Create asynchronous thunk for fetching all contacts
export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll', // Action type
  async (_, thunkAPI) => {
    try {
      // Make an API call to get all contacts
      const response = await phoneApi.getAll();
      // Return the data received from the API
      return response.data;
    } catch (error) {
      // If an error occurs, reject the thunk with the error message
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Create asynchronous thunk for adding a contact
export const addContact = createAsyncThunk(
  'contacts/addContact', // Action type
  async (contact, thunkAPI) => {
    try {
      // Make an API call to create a new contact
      const response = await phoneApi.create(contact);
      // Return the data received from the API
      return response.data;
    } catch (error) {
      // If an error occurs, reject the thunk with the error message
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Create asynchronous thunk for deleting a contact
export const deleteContact = createAsyncThunk(
  'contacts/deleteContact', // Action type
  async (id, thunkAPI) => {
    try {
      // Make an API call to delete a contact by ID
      const response = await phoneApi.delete(id);
      // Return the data received from the API
      return response.data;
    } catch (error) {
      // If an error occurs, reject the thunk with the error message
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
