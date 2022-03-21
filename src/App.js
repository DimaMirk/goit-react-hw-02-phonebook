import { Component } from 'react';
import { nanoid } from 'nanoid';

import ContactForm from 'components/ContactForm/ContactForm';
class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addFilterValue = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  addContactsToList = (name, number) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    this.setState(({ contacts }) => ({
      contacts: [...contacts, contact],
    }));
  };

  render() {
    const visible = this.state.contacts.filter(contact => {
      return contact.name
        .toLowerCase()
        .includes(this.state.filter.toLowerCase());
    });
    return (
      <section className="formSection">
        <h1>Phonebook</h1>
        <ContactForm addContacts={this.addContactsToList} />
        <h1>Contacts</h1>
        <p>Find contacts by name</p>
        <input onChange={this.addFilterValue} />

        <ul>
          {visible.map(contact => (
            <li key={contact.id}>
              {contact.name}: {contact.number}
            </li>
          ))}
        </ul>
      </section>
    );
  }
}
export default App;
