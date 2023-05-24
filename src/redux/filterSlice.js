import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = '';

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    filterStorageContacts(state, action) {
      console.log(state);
      console.log(action);
    },
  },
});

export const { filterStorageContacts } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
