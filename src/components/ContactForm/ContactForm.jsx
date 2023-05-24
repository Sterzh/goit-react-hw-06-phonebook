import { useState } from 'react';
import { nanoid } from 'nanoid';
// import PropTypes from 'prop-types';
import css from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';

export default function ContactForm(props) {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);

  // console.log(contacts);

  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = event => {
    const { name, value } = event.target;
    name === 'name' ? setName(value) : setNumber(value);
    setId(nanoid());
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (name !== '') {
      const checkName = contacts.find(contact => {
        return contact.name === name;
      });

      checkName === undefined
        ? dispatch(addContact({ id: id, name: name, number: number }))
        : // props.onSubmit({ id: id, name: name, number: number })
          alert([name] + ': is already in contacts');
    }

    reset();
  };

  const reset = () => {
    setId('');
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit} className={css.contactForm}>
      <label htmlFor="">
        Name{' '}
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleChange}
          className={css.inputForm}
        />
      </label>
      <label htmlFor="">
        Number{' '}
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
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

// ContactForm.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };
