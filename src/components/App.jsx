import React, { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import Section from './Section/Section';
import Contacts from './Contacts/Contacts';
import { nanoid } from 'nanoid';
import Filter from './FIlter/Filter';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const savedContacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(savedContacts);

    if (parsedContacts) {
      this.setState({
        contacts: parsedContacts,
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.state;
    const prevContacts = prevState.contacts;

    if (contacts !== prevContacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }

  onSubmit = (name, number) => {
    const { contacts } = this.state;
    const repeatedContact = contacts.find(contact => contact.name === name);
    if (repeatedContact) {
      alert(`${name} is already in contacts`);
    } else {
      this.setState(prevState => ({
        contacts: [
          ...prevState.contacts,
          {
            name,
            number,
            id: nanoid(),
          },
        ],
      }));
    }
  };

  onFilterChange = event => {
    this.setState({
      filter: event.target.value,
    });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    const visibleContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );

    return visibleContacts;
  };

  onContactDelete = id => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => contact.id !== id),
      };
    });
  };

  render() {
    const { filter } = this.state;

    const visibleContacts = this.getVisibleContacts();

    return (
      <div
        style={{
          height: '100%',
          padding: 10,
        }}
      >
        <Section title={'Phonebook'}>
          <ContactForm onAddContact={this.onSubmit} />
        </Section>

        <Section title={'Contacts'}>
          <Filter filter={filter} onChange={this.onFilterChange} />
          <Contacts
            onContactDelete={this.onContactDelete}
            contacts={visibleContacts}
          />
        </Section>
      </div>
    );
  }
}
