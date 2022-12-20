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
