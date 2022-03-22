import { Component } from 'react';
import s from './ContactList.module.css';
import propTypes from 'prop-types';

class ContactList extends Component {
  render() {
    return (
      <ul>
        {this.props.visibleContacts.map(contact => (
          <li key={contact.id}>
            {contact.name}: {contact.number}
            <button
              className={s.deleteBtn}
              onClick={() => this.props.deleteContact(contact.id)}
            >
              delete
            </button>
          </li>
        ))}
      </ul>
    );
  }
}
export default ContactList;

ContactList.propTypes = {
  visibleContacts: propTypes.array,
};
