  import React, { Component } from "react";
  import { nanoid } from 'nanoid';
  import { Phonebook, Container } from './App.styled';
  import ContactForm from './ContactForm/ContactForm';
  import Filter from './Filter/Filter';
  import ContactList from './ContactList/ContactList';
  
  export class App extends Component {
    state = {
      contacts: [
        {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
        {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
        {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
        {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
      ],
      filter: '',
    }

    handleChange = event => {
      const { name, value } = event.currentTarget;
      this.setState({ [name]: value });
    };

    handleSubmit = event => {
      event.preventDefault();
      const { name, number } = event.currentTarget;

      const isContactExist = this.state.contacts.some(
        contact => contact.name === name.value
      );
    
      if (isContactExist) {
        alert(`${name.value} is already in contacts`);
        event.currentTarget.reset();
        return;
      }

      const newContact = {
        id: nanoid(10),
        name: name.value,
        number: number.value
      };

      this.setState(prevState => ({
        contacts: [newContact, ...prevState.contacts],
      }));

      event.currentTarget.reset();
    };

    deleteContacts = contactId => {
      this.setState(prevState => ({
        contacts: prevState.contacts.filter(contact => contact.id !== contactId),
      }));
    };

    render() {
      const filteredContacts = this.state.contacts.filter(contact => {
        return contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
      });

      return (
        <Phonebook >
          <Container>
            <h1>Phonebook</h1>
            <ContactForm onSubmit={this.handleSubmit} /> 
            <h2>Contacts</h2>
            <Filter value={this.state.filter} onChange={this.handleChange} />
            <ContactList contacts={filteredContacts} onDeleteContacts={this.deleteContacts} />
          </Container>
        </Phonebook>
      );
    }
  };
