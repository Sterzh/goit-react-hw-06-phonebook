import PropTypes from 'prop-types';
import css from './ContactList.module.css';
import { useSelector } from 'react-redux';

const ContactList = ({ contactsList, onClick }) => {
  const getContacts = useSelector(state => state.contacts);

  console.log(getContacts);

  return (
    <ul className={css.contactList}>
      {getContacts.map(e => {
        return (
          <li className={css.contactListItem} key={e.id}>
            {e.name}: {e.number}
            <button type="button" onClick={() => onClick(e.id)}>
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;

ContactList.propTypes = {
  contactsList: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};
