import {
  fetchContacts,
  addContact,
  deleteContact,
  updateContact,
} from './contacts-operations';

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,

  extraReducers: {
    [fetchContacts.pending]: state => {
      state.isLoading = true;
      //state.error = null;
    },
    [fetchContacts.fulfilled]: (state, { payload }) => {
      state.items = payload;
      state.isLoading = false;
      state.error = null;
    },
    [fetchContacts.rejected]: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    },
    [deleteContact.pending]: state => {
      state.isLoading = true;
    },
    [deleteContact.fulfilled]: (state, { payload }) => {
      state.items = state.items.filter(({ id }) => id !== payload);
      state.isLoading = false;
      state.error = null;
    },
    [deleteContact.rejected]: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    },
    [addContact.pending]: state => {
      state.isLoading = true;
    },
    [addContact.fulfilled]: (state, { payload }) => {
      state.items = [...state.items, payload];
      state.isLoading = false;
      state.error = null;
    },
    [addContact.rejected]: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    },
    [updateContact.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [updateContact.fulfilled]: (state, { payload }) => {
      const index = state.items.findIndex(({ id }) => id === payload.id);
      state.items[index] = payload;
      state.isLoading = false;
      state.error = null;
    },
    [updateContact.rejected]: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    },
  },
});

//export default contactsSlice.reducer;
export const contactsReducer = contactsSlice.reducer;
