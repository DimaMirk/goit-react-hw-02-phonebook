import React from 'react';
import propTypes from 'prop-types';
import ContactItem from 'components/ContactItem';

const ContactList = ({ visibleContacts, deleteContact }) => (
  <ul>
    {visibleContacts.map(contact => {
      return (
        <ContactItem
          contactItem={contact}
          key={contact.id}
          deleteItem={deleteContact}
        />
      );
    })}
  </ul>
);

export default ContactList;

ContactList.propTypes = {
  visibleContacts: propTypes.array,
  deleteContact: propTypes.func,
};
