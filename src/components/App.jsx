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
    const contact = {};
  };

  render() {
    return (
      <>
        <div>
          <h2>Phone book</h2>
          <ContactForm />
        </div>
        <div>
          <h2>Contacts</h2>
          <ul>
            <li></li>
          </ul>
        </div>
      </>
    );
  }
}
