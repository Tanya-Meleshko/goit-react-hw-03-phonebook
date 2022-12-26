import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from './Contact.module.css';

class Contact extends Component {
  handleDelete = () => {
    const contactId = this.props.contact.id;
    this.props.onContactDelete(contactId);
  };

  render() {
    const {
      contact: { name, number },
    } = this.props;

    return (
      <div className={s.contact}>
        <p>{`${name}: ${number}`}</p>
        <button onClick={this.handleDelete} className={s.deleteButton}>
          Delete
        </button>
      </div>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
};

export default Contact;
