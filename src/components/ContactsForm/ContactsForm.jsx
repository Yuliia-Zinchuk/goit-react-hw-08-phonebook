import PropTypes from 'prop-types';
import { useState } from 'react';
import css from './ContactsForm.module.scss';

export const ContactsForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ name, number });
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <div className={css.formAddWraper}>
      <form className={css.form} onSubmit={handleSubmit}>
        <label className={css.inputForm}>
          <span className={css.spanLabel}>Name</span>
          <input
            className={css.input}
            onChange={handleChange}
            type="text"
            name="name"
            placeholder="Jane Smith"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>

        <label className={css.inputForm}>
          <span className={css.spanLabel}>Number</span>
          <input
            className={css.input}
            onChange={handleChange}
            type="tel"
            name="number"
            placeholder="xxx-xx-xx"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>

        <button className={css.btn} type="submit">
          Add contact
        </button>
      </form>
    </div>
  );
};

ContactsForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
