import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { nanoid } from 'nanoid';
import { GlobalStyleComponent } from '../styles/GlobalStyles';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  onFormSubmit = text => {
    const contact = {
      ...text,
      id: nanoid(),
    };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
  };

  handleFilterChange = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact => contact.name.includes(filter));
  };

  render() {
    const { contacts } = this.state;
    return (
      <>
        <div>
          <h2>Phone book</h2>
          <ContactForm onFormSubmit={this.onFormSubmit} />
        </div>
        <div>
          <h2>Contacts</h2>
          <h3>Find contacts by name</h3>
          <input type="text" onChange={this.handleFilterChange} />
          <ul>
            {contacts.map(contact => {
              return (
                <li key={contact.id}>
                  {contact.name}: {contact.number}
                </li>
              );
            })}
          </ul>
        </div>
      </>
    );
  }
}
