import { Component } from 'react';
import { nanoid } from 'nanoid';
class App extends Component {
  id = nanoid();
  state = {
    contacts: [],
    name: '',
    number: '',
    filter: '',
  };

  handleChange = event => {
    this.setState({ [event.currentTarget.name]: event.currentTarget.value });
  };

  onSubmite = e => {
    e.preventDefault();
    const { number, name } = this.state;

    this.addContacts(name, number);
    this.resetForm();
  };

  resetForm = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  addFilterValue = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  addContacts = (name, number) => {
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
    return (
      <section className="formSection">
        <h1>Phonebook</h1>
        <form onSubmit={this.onSubmite} className="form">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            value={this.state.name}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.handleChange}
          />
          <label htmlFor="number">Number</label>
          <input
            id="number"
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={this.state.number}
            onChange={this.handleChange}
          />
          <button type="submite">Add contact</button>
        </form>
        <h1>Contacts</h1>
        <p>Find contacts by name</p>
        <input onChange={this.addFilterValue} />
        <ul>
          {this.state.contacts.map(contact => (
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
