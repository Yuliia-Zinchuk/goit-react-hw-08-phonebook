import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Section } from 'components/Section/Section';
import { Filter } from 'components/Filter/Filter';
import { Loader } from 'components/Loader/Loader';
import { ContactsForm } from 'components/ContactsForm/ContactsForm';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { Modal } from 'components/Modal/Modal';

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

import css from './ContactsPage.module.scss';

export const ContactsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [contactToUpdate, setContactToUpdate] = useState(null);
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispath = useDispatch();

  useEffect(() => {
    dispath(fetchContacts());
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

  const onUpdateContactModal = contactId => {
    openModal();
    const contact = contacts.find(({ id }) => id === contactId);
    setContactToUpdate(contact);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const onDeleteContact = contactId => {
    dispath(deleteContact(contactId));
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <div className={css.wraper}>
        <Section title="Phonebook">
          <ContactsForm onSubmit={onAddContact} />
        </Section>

        <Section title="Contacts">
          <div className={css.contactsListwraper}>
            {<Filter handleChange={handleChange} />}
            {error && <p>{error}</p>}
            {contacts && !error && (
              <ContactsList
                onDeleteContact={onDeleteContact}
                onUpdateContactModal={onUpdateContactModal}
                openModal={openModal}
              />
            )}
            {isLoading && <Loader />}
          </div>
        </Section>
      </div>
      <ToastContainer
        autoClose={3000}
        position="top-center"
        hideProgressBar={false}
      />

      {isModalOpen && (
        <Modal contact={contactToUpdate} closeModal={closeModal} />
      )}
    </>
  );
};
