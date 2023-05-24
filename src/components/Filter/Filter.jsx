import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { filterStorageContacts } from '../../redux/filterSlice';
// import PropTypes from 'prop-types';
// import css from './Filter.module.css';

export default function Filter(props) {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);

  console.log(contacts);

  const [filter, setFilter] = useState('');
  const [filterContact, setFilterContact] = useState('');

  const handleChange = event => {
    setFilter(event.target.value);
  };

  // useEffect(() => {
  //   const filterUpdateContacts = contacts.filter(contact => {
  //     return contact.name.toLowerCase().includes(filter.toLowerCase());
  //   });
  //   setFilterContact(filterUpdateContacts);
  // }, [filter, contacts]);

  // useEffect(() => {
  //   dispatch(filterStorageContacts(filterContact));
  // }, [dispatch, filterContact]);

  return <input type="text" onChange={handleChange} value={filter} />;
}

// Filter.propTypes = {
//   contacts: PropTypes.array.isRequired,
//   onchange: PropTypes.func.isRequired,
// };
