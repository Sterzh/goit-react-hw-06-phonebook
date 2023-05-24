import { createSlice } from '@reduxjs/toolkit';

const contactsInitialState = [];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    loadLocalStorageContacts(state, action) {
      console.log(action);
    },
    addContact: {
      reducer: (state, action) => {
        state.push(action.payload);
      },
      prepare: payload => ({ payload }),
    },
    deleteContact(state, action) {
      const index = state.findIndex(e => e.id === action.payload);
      state.splice(index, 1);
      // setContacts(prevContacts => prevContacts.filter(e => e.id !== id));
      // filter === ''
      //   ? setContacts(prevContacts => prevContacts.filter(e => e.id !== id))
      //   : setFilter(prevFilter => prevFilter.filter(e => e.id !== id));
      console.log(action);
    },
  },
});

export const { loadLocalStorageContacts, addContact, deleteContact } =
  contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
