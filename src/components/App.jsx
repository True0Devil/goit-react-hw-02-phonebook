import { Component } from 'react';
import { AddContact } from './AddContact/AddContact';
import { ShowContacts } from './ShowContacts/ShowContacts';
import { Filter } from './Filter/Filter';
import { Section } from './Section/Section';
import shortid from 'shortid';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Gabe Newell', number: '459-12-56' },
      { id: 'id-2', name: 'Scammerino', number: '8-800-555-35-35' },
      { id: 'id-3', name: 'Commander Sheppard', number: '645-17-79' },
      { id: 'id-4', name: 'Quentin Tarantino', number: '227-91-26' },
    ],
    filter: '',
  };

  handleFilterChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleDelete = id => {
    this.setState({
      contacts: this.state.contacts.filter(contact => contact.id !== id),
    });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedQuery = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedQuery)
    );
  };

  addContact = ({ name, number }) => {
    const newContact = {
      id: shortid.generate(),
      name,
      number,
    };

    this.checkForDoubleContact(newContact);
  };

  checkForDoubleContact = newContact => {
    const normalizedNewName = newContact.name.toLowerCase();

    this.state.contacts.some(
      contact => contact.name.toLowerCase() === normalizedNewName
    )
      ? alert(`${newContact.name} is already in your contacts`)
      : this.setState(prevState => ({
          contacts: [newContact, ...prevState.contacts],
        }));
  };

  render() {
    return (
      <>
        <Section title="Phonebook">
          <AddContact addContact={this.addContact} />
        </Section>

        <Section title="Contacts">
          <Filter
            onChange={this.handleFilterChange}
            filter={this.state.filter}
          />
          <ShowContacts
            contacts={this.getVisibleContacts()}
            onDelete={this.handleDelete}
          />
        </Section>
      </>
    );
  }
}
