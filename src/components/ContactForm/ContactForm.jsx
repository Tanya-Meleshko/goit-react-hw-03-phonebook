import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from './ContactForm.module.css';

export default class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  onChange = event => {
    const inputName = event.target.name;
    const inputValue = event.target.value;

    this.setState({
      [inputName]: inputValue,
    });
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { name, number } = this.state;
    this.props.onAddContact(name, number);
    this.reset();
  };

  render() {
    const { name, number } = this.state;

    return (
      <form onSubmit={this.handleSubmit} className={s.contactForm}>
        <label className={s.contactLabel}>
          Name
          <input
            className={s.contactInput}
            onChange={this.onChange}
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>

        <label className={s.contactLabel}>
          Number
          <input
            className={s.contactInput}
            onChange={this.onChange}
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>

        <button type="submit" className={s.submitButton}>
          Add contact
        </button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
};
