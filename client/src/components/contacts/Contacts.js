import React, { useContext } from 'react';
import ContactContext from '../../context/contact/contactContext';
import ContactsItem from './ContactsItem';

const Contacts = () => {
  const contactContext = useContext(ContactContext);

  const { contacts, filtered } = contactContext;

  if (contacts.length === 0) {
    return <h4>Please add a contact</h4>;
  }
  console.log(filtered);

  return (
    <React.Fragment>
      {filtered !== null
        ? filtered.map(contact => (
            <ContactsItem key={contact.id} contact={contact} />
          ))
        : contacts.map(contact => (
            <ContactsItem key={contact.id} contact={contact} />
          ))}
    </React.Fragment>
  );
};

export default Contacts;
