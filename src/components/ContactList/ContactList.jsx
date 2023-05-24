// import PropTypes from 'prop-types';
import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';

const ContactList = () => {
  // const getContacts = useSelector(state => state.contacts);
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);

  // console.log(contacts);

  return (
    <ul className={css.contactList}>
      {contacts.map(e => {
        return (
          <li className={css.contactListItem} key={e.id}>
            {e.name}: {e.number}
            <button type="button" onClick={() => dispatch(deleteContact(e.id))}>
              {/* <button type="button" onClick={() => onClick(e.id)}> */}
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;

// ContactList.propTypes = {
//   contactsList: PropTypes.array.isRequired,
//   onClick: PropTypes.func.isRequired,
// };
