import { Component } from 'react';

class ContactList extends Component {
  render() {
    return (
      <ul>
        {this.props.visibleContacts.map(contact => (
          <li key={contact.id}>
            {contact.name}: {contact.number}
            <button onClick={() => this.props.deleteContact(contact.id)}>
              delete
            </button>
          </li>
        ))}
      </ul>
    );
  }
}
export default ContactList;
