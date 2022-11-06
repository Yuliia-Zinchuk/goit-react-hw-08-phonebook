import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateContact } from 'redux/contacts/contacts-operations';

import css from './UpdateContactForm.module.css';

export const UpdateContactForm = ({ contact, closeModal }) => {
  // const [name, setName] = useState('');
  // const [number, setNumber] = useState('');
  const [contactName, setContactName] = useState(contact.name);
  const [contactNumber, setContactNumber] = useState(contact.number);
  const dispatch = useDispatch();

  // const changeContact = e => {
  //   const { name, value } = e.target;
  //   setContactName(value);
  //   setContactNumber(value);
  // };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(
      updateContact({ ...contact, name: contactName, number: contactNumber })
    );
    closeModal();
    //reset();
  };

  const changeContact = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setContactName(value);
        break;
      case 'number':
        setContactNumber(value);
        break;
      default:
        return;
    }
  };

  //   const handleSubmit = e => {
  //     e.preventDefault();
  //     onSubmit({ name, number });
  //     reset();
  //   };

  // const reset = () => {
  //   setName('');
  //   setNumber('');
  // };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.inputForm}>
        <span>Name</span>
        <input
          className={css.input}
          onChange={changeContact}
          type="text"
          name="name"
          value={contactName}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>

      <label className={css.inputForm}>
        <span>Number</span>
        <input
          className={css.input}
          onChange={changeContact}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={contactNumber}
        />
      </label>

      <button className={css.btn} type="submit">
        Add contact
      </button>
    </form>
  );
};

UpdateContactForm.propTypes = {
  contact: PropTypes.object.isRequired,
  closeModal: PropTypes.func.isRequired,
};
