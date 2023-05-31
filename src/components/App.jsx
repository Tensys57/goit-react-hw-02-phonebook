import { Component } from 'react';
// import { nanoid } from 'nanoid';
// import PropTypes from 'prop-types';

import ContactForm from './ContactForm/ContactForm';

export const App = class extends Component {
  state = {
    contacts: [],
    // name: '',
    // number: '',
  };

  handleFormSubmit = contact => {
    console.log('contact :>> ', contact);
  };

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <ContactForm onSubmitContact={this.handleFormSubmit} />
      </div>
    );
  }
};
