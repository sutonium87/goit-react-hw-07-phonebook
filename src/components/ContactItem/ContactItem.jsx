// Import necessary dependencies and styles
import React from 'react';
import style from './ContactItem.module.css';
import PropTypes from 'prop-types';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

// Import Redux hooks and operations
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';

// Define the ContactItem functional component
export default function ContactItem({ contacts }) {
  // Redux setup: dispatch
  const dispatch = useDispatch();

  // Handle contact deletion
  const handleDelete = () => {
    // Dispatch the deleteContact action and display a notification
    dispatch(deleteContact(contacts.id));
    Notify.info(
      `${contacts.name} was successfully deleted from your phonebook`,
      {
        position: 'center-center',
      }
    );
  };

  // JSX structure for the ContactItem component
  return (
    <div>
      <li className={style.contactItem}>
        <div className={style.contacts}>
          {/* Display the contact name and number */}
          <p>{contacts.name}</p>
          <p>{contacts.number} </p>
        </div>

        {/* Button to delete the contact */}
        <button
          type="button"
          className={style.formButton}
          onClick={handleDelete}
        >
          Delete
        </button>
      </li>
    </div>
  );
}

// Prop types for the ContactItem component
ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
