import PropTypes from 'prop-types';
import s from './Contacts.module.css';
import Contact from 'components/Contact/Contact';

const Contacts = ({ contacts, onContactDelete }) => {
  if (contacts.length) {
    return (
      <ul className={s.contactsList}>
        {contacts.map(contact => (
          <li key={contact.id}>
            <Contact onContactDelete={onContactDelete} contact={contact} />
          </li>
        ))}
      </ul>
    );
  }
  return 'There are no contacts';
};

export default Contacts;

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,

  onContactDelete: PropTypes.func.isRequired,
};
