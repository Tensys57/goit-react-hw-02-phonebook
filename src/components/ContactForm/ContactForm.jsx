import { Component } from 'react';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';
const ContactForm = class extends Component {
  state = { name: '', number: '' };

  handleChange = ev => {
    const { name, value } = ev.currentTarget;
    console.log('ev :>> ', ev.currentTarget.value);
    this.setState({ [name]: value });
  };

  handleSubmit = ev => {
    ev.preventDefault();
    this.props.onSubmitContact(this.state);
    this.reset();
  };

  reset = () => this.setState({ name: '', number: '' });

  name.id = nanoid();
  number.id = nanoid();

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
        <h2 className={css.inputTitle}>Phonebook</h2>
        <form className={css.inputForm} onSubmit={this.handleSubmit}>
          <label className={css.inputLabel}>
            Name
            <input
              type="text"
              name="name"
              value={this.state.name}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={this.handleChange}
              id={this.nameInput.id}
            />
          </label>
          <label className={css.inputLabel}>
            Number
            <input
              type="tel"
              name="number"
              value={this.state.number}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={this.handleChange}
              id={numberInput.id}
            />
          </label>
          <button type="submit" className={css.inputBtn}>
            Add contact
          </button>
        </form>
      </div>
    );
  }
};

export default ContactForm;
