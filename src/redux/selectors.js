// Import necessary dependencies
import { createSelector } from '@reduxjs/toolkit';

// Selectors for retrieving state values
export const getContacts = state => state.contacts.contacts.items; // Select contacts from state
export const getFilter = state => state.filter.filter; // Select filter from state

export const getIsLoading = state => state.contacts.contacts.isLoading; // Select isLoading from state
export const getError = state => state.contacts.contacts.error; // Select error from state

// Selector for filtering contacts based on the search filter
export const getFilteredContacts = createSelector(
  [getContacts, getFilter], // Input selectors
  (contacts, filter) => {
    // Return contacts that match the filter (case-insensitive)
    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });
  }
);
