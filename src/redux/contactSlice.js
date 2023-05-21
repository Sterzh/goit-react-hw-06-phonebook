import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: [],
  filter: '',
};

export const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.contacts += 1;
    },
    delContact: (state, action) => {
      state.contacts -= 1;
    },
  },
});

export const { addContact, delContact } = contactSlice.actions;

export contactSlice.reducer;

export const filterSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.contacts += 1;
    },
    delContact: (state, action) => {
      state.contacts -= 1;
    },
  },
});

export const { addContact, delContact } = contactSlice.actions;

export default contactReducer.reducer;