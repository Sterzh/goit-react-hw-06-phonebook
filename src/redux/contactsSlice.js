import { createSlice } from '@reduxjs/toolkit';

const contactsInitialState = [];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    loadLocalStorageContacts(state, action) {
      const push = state.push(action.payload);
    },
    addContact: {
      reducer: (state, action) => {
        console.log(state);
      },
      prepare: payload => ({ payload }),
    },
    deleteContact(state, action) {
      console.log(action);
    },
  },
});

export const { loadLocalStorageContacts, addContact, deleteContact } =
  contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
