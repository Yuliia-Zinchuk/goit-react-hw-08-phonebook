import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { ContactsListItem } from './ContactsListItem';
//import { selectVisibleContacts } from 'redux/filter/filter-selectors';
import { selectVisibleContacts } from 'redux/contacts/contacts-selectors';
import css from './ContactsList.module.css';
//import { selectContacts } from 'redux/contacts/contactsSelectors';

export const ContactsList = ({ onDeleteContact, onUpdateContactModal }) => {
  // const contacts = useSelector(selectContacts);
  const visibleContacts = useSelector(selectVisibleContacts);
  // console.log(visibleContacts);
  return (
    <>
      <div className={css.contactListWraper}>
        <ul className={css.contactsList}>
          {visibleContacts
            // contacts.filter(({ name }) =>
            //   name.toLowerCase().includes(filter.toLowerCase()))
            .map(({ id, name, number }) => (
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
