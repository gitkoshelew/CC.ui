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
      console.log(123);
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
    isAuth: false,
  },
  reducers: {
    registerAC(state, action) {
      state.isAuth = action.payload;
    },
    loginAC(state, action) {
      state.isAuth = action.payload;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [registration.fulfilled.type]: (state) => {
      state.isAuth = true;
    },
    [logIn.fulfilled.type]: (state) => {
      state.isAuth = true;
    },
  },
});

export const authReducer = slice.reducer;
export const { registerAC } = slice.actions;
