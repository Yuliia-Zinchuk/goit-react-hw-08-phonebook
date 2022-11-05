import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ContactsForm } from 'components/ContactsForm/ContactsForm';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { Section } from 'components/Section/Section';
import { Filter } from 'components/Filter/Filter';
import { Loader } from 'components/Loader/Loader';

import { useDispatch, useSelector } from 'react-redux';
import {
  selectContacts,
  selectIsLoading,
  selectError,
} from 'redux/contacts/contacts-selectors';
import {
  fetchContacts,
  addContact,
  deleteContact,
} from 'redux/contacts/contacts-operations';
import { onFilter } from 'redux/filter/filter-slice';

// import { RegisterForm } from './RegisterForm/RegisterForm';
// import { LoginForm } from './LoginForm/LoginForm';
//import { fetchCurrentUser } from 'redux/auth/auth-operations';
//import { ContactsList } from 'components/ContactsList/ContactsList';

export const ContactsPage = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispath = useDispatch();

  useEffect(() => {
    dispath(fetchContacts());
    // dispath(fetchCurrentUser());
  }, [dispath]);

  const onAddContact = data => {
    if (contacts.find(contact => contact.name === `${data.name}`)) {
      return toast.warning(`${data.name} is already in contacts.`);
    }
    dispath(addContact({ ...data }));
  };

  const handleChange = e => {
    const { value } = e.target;
    dispath(onFilter(value));
  };

  const onDeleteContact = contactId => {
    dispath(deleteContact(contactId));
  };

  return (
    <>
      {/* <RegisterForm />
      <LoginForm /> */}
      {/* <button onClick={() => dispath(logout())}>Logout</button> */}
      <Section title="Phonebook">
        <ContactsForm onSubmit={onAddContact} />
      </Section>

      <Section title="Contacts">
        {<Filter handleChange={handleChange} />}
        {error && <p>{error.message}</p>}
        {contacts && !error && (
          <ContactsList onDeleteContact={onDeleteContact} />
        )}
        {isLoading && <Loader />}
      </Section>
      <ToastContainer
        autoClose={3000}
        position="top-center"
        hideProgressBar={false}
      />
    </>
  );
};
