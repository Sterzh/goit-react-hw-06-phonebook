// import { createReducer } from '@reduxjs/toolkit';
// import {
//   addContact,
//   deleteContact,
//   addFilterContacts,
//   loadLocalStorageContacts,
// } from './actions';

// const contactsInitialState = [];

// export const contactReducer = createReducer(contactsInitialState, builder => {
//   builder
//     .addCase(loadLocalStorageContacts, (state, action) => {
//       console.log('loadLocalStorageContacts');
//       //   state.contacts = ['loadLocalStorageContacts'];
//     })
//     .addCase(addContact, (state, action) => {
//       console.log(state);
//       console.log(action);
//       //   state.contacts = ['addContact'];
//     })
//     .addCase(deleteContact, (state, action) => {
//       console.log('deleteContact');
//       //   state.contacts = ['deleteContact'];
//     });
// });

// const filtersInitialState = '';

// export const filtersReducer = createReducer(filtersInitialState, builder => {
//   builder.addCase(addFilterContacts, (state, action) => {
//     console.log('addFilterContacts');
//     state.contacts = ['addFilterContacts'];
//   });
// });
