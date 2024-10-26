import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  items: JSON.parse(localStorage.getItem("contacts")) ?? [],
};

const contactsSlice = createSlice({
  name: "items",
  initialState: INITIAL_STATE,
  reducers: {
    addContact: (state, action) => {
      state.items.push(action.payload);
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter(
        (contact) => contact.id !== action.payload
      );
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { addContact, deleteContact } = contactsSlice.actions;
export const selectContacts = (state) => state.contactsData.items;
// contacts/addContact
// contacts/deleteContact
