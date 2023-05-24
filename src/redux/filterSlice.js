import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = [];

const filterSlice = createSlice({
  name: 'contacts',
  initialState: filterInitialState,
  reducers: {
    loadLocalStorageContacts(state, action) {
      console.log(state);
      console.log(action);
    },
  },
});

export const { loadLocalStorageContacts } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
