import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { AxiosError } from 'axios';
import { authApi } from '../../api/authApi';
import { LoginFormType, RegistrationFormType } from '../../Types/AuthTypes';

export const registration = createAsyncThunk(
  'registration/register',
  async (data: RegistrationFormType, { rejectWithValue }) => {
    try {
      const response = await authApi.registration(data);
      // localStorage.setItem('token', response.data.accessToken);
      return response.data;
    } catch (e) {
      const err = e as AxiosError;
      return rejectWithValue(err.message);
    }
  }
);
export const logIn = createAsyncThunk(
  'login/register',
  async (data: LoginFormType, { rejectWithValue }) => {
    try {
      const response = await authApi.logIn(data);
      // localStorage.setItem('token', response.data.accessToken);
      return response.data;
    } catch (e) {
      const err = e as AxiosError;
      return rejectWithValue(err.message);
    }
  }
);

export const slice = createSlice({
  name: 'register',
  initialState: {
    data: false,
  },
  reducers: {
    registerAC(state, action) {
      state.data = action.payload;
    },
    loginAC(state, action) {
      state.data = action.payload;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => ({
      ...state,
      ...action.payload.data,
    }),
    // [registration.fulfilled.type]: (state, action) => {
    //   state.data = action.payload;
    // },
    // [logIn.fulfilled.type]: (state, action) => {
    //   state.data = action.payload;
    // },
  },
});

export const authReducer = slice.reducer;
export const { registerAC } = slice.actions;
export const { loginAC } = slice.actions;
