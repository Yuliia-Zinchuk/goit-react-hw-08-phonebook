import PropTypes from 'prop-types';
import css from './ContactsList.module.css';

export const ContactsListItem = ({
  name,
  number,
  onUpdateContact,
  openModal,
  onDeleteContact,
}) => (
  <>
    <p className={css.contactNumber}>
      {name}: {number}
    </p>
    <button className={css.btn} onClick={onUpdateContact} type="button">
      Update
    </button>
    <button className={css.btn} onClick={onDeleteContact} type="button">
      Delete
    </button>
  </>
);
ContactsListItem.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,

  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ),
};
// prop functions!!!!!!!!!!!!!!!!!!!!!!!!!
