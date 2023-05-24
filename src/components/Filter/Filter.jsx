import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterStorageContacts } from '../../redux/filterSlice';

export default function Filter(props) {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts);

  const [filter, setFilter] = useState('');

  const handleChange = event => {
    setFilter(event.target.value);
    const filterUpdateContacts = contacts.filter(contact => {
      return contact.name
        .toLowerCase()
        .includes(event.target.value.toLowerCase());
    });

    dispatch(filterStorageContacts(filterUpdateContacts));
  };

  return <input type="text" onChange={handleChange} value={filter} />;
}
