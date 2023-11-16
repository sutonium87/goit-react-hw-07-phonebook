// Import necessary dependencies and styles
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import style from './ContactForm.module.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

// Import Redux hooks and operations
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { addContact } from 'redux/operations';

// Define the ContactForm functional component
export function ContactForm() {
  // State variables for name and number inputs
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  // Redux setup: dispatch and select contacts from the store
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  // Handle form submission
  const handleSubmit = event => {
    event.preventDefault();

    // Check if the contact already exists in the list
    const contactExists = contacts
      .map(contact => contact.name.toLowerCase())
      .includes(name.toLowerCase());

    // Display a warning notification if the contact already exists
    if (contactExists) {
      Notify.warning(`${name} is already in contacts`, {
        position: 'center-center',
      });
      setName('');
      setNumber('');
      return;
    }

    // Dispatch the addContact action and reset input fields
    dispatch(addContact({ name: name, number: number }));
    setName('');
    setNumber('');

    // Display a success notification for adding the contact
    Notify.success(`${name} was successfully added to your contacts`, {
      position: 'center-center',
    });
  };

  // JSX structure for the ContactForm component
  return (
    <div className={style.phonebookWrapper}>
      <h1>Phonebook</h1>
      <form className={style.contactForm} onSubmit={handleSubmit}>
        {/* Input field for the contact name */}
        <label className={style.formLabel}>Name</label>
        <input
          className={style.phonebookInput}
          type="text"
          name="name"
          placeholder="Enter name"
          pattern="^[a-zA-Z]+(([' -][a-zA-Z ])?[a-zA-Z]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          onChange={event => setName(event.target.value)}
          required
        ></input>

        {/* Input field for the contact phone number */}
        <label className={style.formLabel}>Phone Number</label>
        <input
          className={style.phonebookInput}
          type="tel"
          name="number"
          placeholder="Enter phone number"
          pattern="^[a-zA-Z]+(([' -][a-zA-Z ])?[a-zA-Z]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          onChange={event => setNumber(event.target.value)}
          required
        ></input>

        {/* Button to submit the form */}
        <button className={style.formButton} type="submit">
          Add contact
        </button>
      </form>
    </div>
  );
}

// Prop types for the ContactForm component
ContactForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  onAddContact: PropTypes.func.isRequired,
};
