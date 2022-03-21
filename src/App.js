import { Component } from 'react';
import { nanoid } from 'nanoid';

import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';
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

    this.setState(({ contacts }) => {
      const check = contacts.find(item => item.name === name);
      if (check) {
        alert("Таке ім'я вже додано до списку!");
        return;
      } else {
        return {
          contacts: [...contacts, contact],
        };
      }
    });
  };

  deleteContact = id => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const visible = this.state.contacts.filter(contact => {
      return contact.name
        .toLowerCase()
        .includes(this.state.filter.toLowerCase());
    });
    return (
      <div className="formSection">
        <h1>Phonebook</h1>
        <ContactForm addContacts={this.addContactsToList} />

        <h1>Contacts</h1>
        <Filter addFilterValue={this.addFilterValue} />
        <ContactList
          visibleContacts={visible}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}
export default App;
