import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { AxiosError } from 'axios';
import { authApi } from '../../api/authApi';
import { RegistrationType } from '../../Types/types';

export const registration = createAsyncThunk(
  'registration/register',
  async (data: RegistrationType, { rejectWithValue }) => {
    try {
      const response = await authApi.registration(data);
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
    data: {} as RegistrationType,
  },
  reducers: {
    registerAC(state, action: PayloadAction<RegistrationType>) {
      state.data = action.payload;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => ({
      ...state,
      ...action.payload.data,
    }),
    [registration.fulfilled.type]: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const authReducer = slice.reducer;
export const { registerAC } = slice.actions;
