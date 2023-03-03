import { createSlice } from '@reduxjs/toolkit';

import { nanoid } from 'nanoid';

const contactSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact: {
      reducer: (state, { payload }) => {
        state.push(payload);
      },
      prepare: data => {
        return {
          payload: {
            id: nanoid(),
            ...data,
          },
        };
      },
    },
    removeContact: (state, { payload }) =>
      state.filter(({ id }) => id !== payload),
  },
});

export const { addContact, removeContact } = contactSlice.actions;
export default contactSlice.reducer;
