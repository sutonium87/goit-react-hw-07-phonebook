import React, { useEffect } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import Loader from './Loader/Loader';

import { fetchContacts } from 'redux/operations';
import { getIsLoading, getError } from 'redux/selectors';

import { useDispatch, useSelector } from 'react-redux';

export function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  const isLoading = useSelector(getIsLoading);
  const errorMessage = useSelector(getError);

  return (
    <>
      <ContactForm />
      <Filter />
      {isLoading && !errorMessage && <Loader />}
      <ContactList />
    </>
  );
}
