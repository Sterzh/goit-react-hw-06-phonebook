import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';

export default function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts);
  const newContact = {};

  const handleChange = event => {
    const { name, value } = event.target;
    name === 'name' ? (newContact.name = value) : (newContact.number = value);
    newContact.id = nanoid();
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (newContact.name !== '') {
      const checkName = contacts.find(contact => {
        return contact.name === newContact.name;
      });

      checkName === undefined
        ? dispatch(addContact(newContact))
        : alert([newContact.name] + ': is already in contacts');
    }

    // newContact.name = '';
    // newContact.number = '';
  };

  return (
    <form onSubmit={handleSubmit} className={css.contactForm}>
      <label htmlFor="">
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={newContact.name}
          onChange={handleChange}
          className={css.inputForm}
        />
      </label>
      <label htmlFor="">
        Number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={newContact.number}
          onChange={handleChange}
          className={css.inputForm}
        />
      </label>
      <button className={css.contactFormButton} type="submit">
        Add contact
      </button>
    </form>
  );
}
