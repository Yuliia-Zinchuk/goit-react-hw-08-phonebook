import { createSlice } from '@reduxjs/toolkit';
import { register, login, logout, fetchCurrentUser } from './auth-operations';
//import { Loader } from 'components/Loader/Loader';

const initialState = {
  user: {
    name: '',
    email: '',
  },
  token: null,
  //   isLoggedIn: false,
  isLoading: false,
  error: null,
  isFetchingCurrentUser: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(register.pending, state => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, { payload: { user, token } }) => {
        state.isLoading = false;
        state.token = token;
        state.user = user;
        //   state.isLoggedIn = true;
      })
      .addCase(register.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(login.pending, state => {
        state.isLoading = true;
        state.eroor = null;
      })

      .addCase(login.fulfilled, (state, { payload: { user, token } }) => {
        state.isLoading = false;
        state.token = token;
        state.user = user;
        //   state.isLoggedIn = true;
      })

      .addCase(login.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(logout.pending, state => {
        state.isLoading = true;
      })
      .addCase(logout.fulfilled, state => {
        state.isLoading = false;
        state.token = null;
        state.user = {
          name: '',
          email: '',
        };
        //   state.isLoggedIn = false;
      })
      .addCase(logout.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(fetchCurrentUser.pending, state => {
        state.isLoading = true;
        state.isFetchingCurrentUser = true;
      })
      .addCase(fetchCurrentUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user = payload;
        //   state.isLoggedIn = true;
        state.isFetchingCurrentUser = false;
      })
      .addCase(fetchCurrentUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
        state.isFetchingCurrentUser = false;
      });
  },
});

export default authSlice.reducer;
