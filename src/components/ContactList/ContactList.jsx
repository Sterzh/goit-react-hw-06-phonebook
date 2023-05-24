import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.filter);
  const renderList = filter === '' ? contacts : filter;

  return (
    <ul className={css.contactList}>
      {renderList.map(e => {
        return (
          <li className={css.contactListItem} key={e.id}>
            {e.name}: {e.number}
            <button type="button" onClick={() => dispatch(deleteContact(e.id))}>
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
