// Import necessary dependencies and components
import React, { useEffect } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import Loader from './Loader/Loader';

// Import Redux actions, operations, and selectors
import { fetchContacts } from 'redux/operations';
import { getIsLoading, getError } from 'redux/selectors';

// Import Redux hooks
import { useDispatch, useSelector } from 'react-redux';

// Define the App functional component
export function App() {
  // Redux setup: dispatch and useEffect to fetch contacts on component mount
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  // Select isLoading and errorMessage from the store
  const isLoading = useSelector(getIsLoading);
  const errorMessage = useSelector(getError);

  // JSX structure for the App component
  return (
    <>
      {/* Render ContactForm, Filter, Loader, and ContactList components */}
      <ContactForm />
      <Filter />
      {isLoading && !errorMessage && <Loader />}
      <ContactList />
    </>
  );
}
