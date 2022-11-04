import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filter: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    onFilter: (state, { payload }) => {
      state.filter = payload;
    },
  },
});

export const { onFilter } = filterSlice.actions;
export default filterSlice.reducer;
