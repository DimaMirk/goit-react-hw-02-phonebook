import React from 'react';
import s from '../ContactList/ContactList.module.css';
import propTypes from 'prop-types';

const ContactItem = ({ contactItem, deleteItem }) => (
  <li>
    {contactItem.name}: {contactItem.number}
    <button className={s.deleteBtn} onClick={() => deleteItem(contactItem.id)}>
      delete
    </button>
  </li>
);

export default ContactItem;
ContactItem.propTypes = {
  contactItem: propTypes.object,
  deleteItem: propTypes.func,
};
