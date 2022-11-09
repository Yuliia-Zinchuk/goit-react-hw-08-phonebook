import PropTypes from 'prop-types';
import { HiOutlineTrash, HiOutlinePencil } from 'react-icons/hi';
import css from './ContactsList.module.scss';

export const ContactsListItem = ({
  name,
  number,
  onUpdateContact,
  onDeleteContact,
}) => (
  <>
    <div className={css.contact}>
      <p className={css.contactNumber}>
        {name}: {number}
      </p>
      <div className={css.btnWraper}>
        {' '}
        <button className={css.btn} onClick={onUpdateContact} type="button">
          <HiOutlinePencil size={18} />
        </button>
        <button className={css.btn} onClick={onDeleteContact} type="button">
          <HiOutlineTrash size={18} />
        </button>
      </div>
    </div>
  </>
);
ContactsListItem.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
  onUpdateContact: PropTypes.func.isRequired,

  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ),
};
