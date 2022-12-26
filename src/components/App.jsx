import { Component } from 'react';
import { AddContact } from './AddContact/AddContact';
import { ShowContacts } from './ShowContacts/ShowContacts';
import { Filter } from './Filter/Filter';
import { Section } from './Section/Section';
import { Title, SecondaryTitle } from './Section/Section.styled';

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
      contacts: this.state.contacts.reduce((acc, contact) => {
        contact.id !== id && acc.push(contact);
        return acc;
      }, []),
    });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedQuery = filter.toLocaleLowerCase();
    return contacts.filter(
      contact =>
        contact.name.toLocaleLowerCase().includes(normalizedQuery) ||
        contact.number.includes(filter)
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

  // checkForDoubleContact = newContact => {
  //   const normalizedNewName = newContact.name.toLowerCase();

  //   this.state.contacts.some(
  //     contact => contact.name.toLowerCase() === normalizedNewName
  //   )
  //     ? alert(`${newContact.name} is already in your contacts`)
  //     : this.setState(prevState => ({
  //         contacts: [newContact, ...prevState.contacts],
  //       }));
  // };

  checkForDoubleContact = newContact => {
    const normalizedNewName = newContact.name.toLowerCase();

    const hasTheSameName = this.state.contacts.some(
      contact => contact.name.toLowerCase() === normalizedNewName
    );

    const hasTheSameNumber = this.state.contacts.some(
      contact => contact.number === newContact.number
    );

    if (hasTheSameName) {
      return alert(`${newContact.name} is already in your contacts!`);
    }

    if (hasTheSameNumber) {
      return alert(`The user with this number is already in your contacts!`);
    }

    this.setState(prevState => ({
      contacts: [newContact, ...prevState.contacts],
    }));
  };

  render() {
    return (
      <>
        <Section>
          <Title>Phonebook</Title>
          <AddContact contacts={this.contacts} addContact={this.addContact} />
        </Section>

        <Section>
          <SecondaryTitle>Contacts</SecondaryTitle>
          <Filter onChange={this.handleFilterChange} />
          <ShowContacts
            contacts={this.getVisibleContacts()}
            onDelete={this.handleDelete}
          />
        </Section>
      </>
    );
  }
}
