import { Component } from "react";
import { nanoid } from 'nanoid';
import Swal from 'sweetalert2';

import { ContactForm } from "components/ContactForm /ContactForm";
import { ContactList } from "components/ContactList/ContactList";
import { Filter } from "components/Filter/Filter";

import { MainSection, ContactsTitle, Title } from './App.styled';


export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContacts = ({ name, number }) => {
    const newObj = {
      id: nanoid(),
      name,
      number,
    };
    console.log(newObj)

    const dublicateOfName = this.state.contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    const dublicateOfNumber = this.state.contacts.some(
      contact =>
        contact.number.replace(/-/g, '').replace(/ /g, '') ===
        number.replace(/ /g, '').replace(/-/g, '')
    );

    if (dublicateOfName) {
      Swal.fire(`${name} is alredy in contacts`)
     return false
    }

    if (dublicateOfNumber) {
       Swal.fire(`${number} is alredy in contacts`);
      return false
    }

    this.setState(({ contacts }) => ({
      contacts: [newObj, ...contacts],
    }));

    console.log(number.replace(/-/g, ''));
  };

  filterContacts = event => {
    this.setState({
      filter: event.currentTarget.value,
    });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { filter, contacts } = this.state;
    const visibleContacts = this.getVisibleContacts();
    return (
      <MainSection>
        <Title>Phonebook</Title>
        <ContactForm onSubmit={this.addContacts} />
        <ContactsTitle>Contacts</ContactsTitle>
        <Filter value={filter} contacts={contacts} onChange={this.filterContacts} />
        <ContactList
          contacts={visibleContacts}
          deleteContact={this.deleteContact}
        />
      </MainSection>
    );
  }
};
