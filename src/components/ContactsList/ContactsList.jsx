import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { ContactsListItem } from './ContactsListItem';

import { selectVisibleContacts } from 'redux/contacts/contacts-selectors';
import css from './ContactsList.module.css';

export const ContactsList = ({ onDeleteContact, onUpdateContactModal }) => {
  const visibleContacts = useSelector(selectVisibleContacts);

  return (
    <>
      <div className={css.contactListWraper}>
        <ul className={css.contactsList}>
          {visibleContacts.map(({ id, name, number }) => (
            <li className={css.contactItem} key={id}>
              <ContactsListItem
                name={name}
                number={number}
                onDeleteContact={() => {
                  onDeleteContact(id);
                }}
                onUpdateContact={() => {
                  onUpdateContactModal(id);
                }}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

ContactsList.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
};
