import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { HYDRATE } from 'next-redux-wrapper';
import { authApi } from '../../api/authApi';

export const initializeApp = createAsyncThunk(
  'app/initializeApp',
  async (_, { rejectWithValue }) => {
    try {
      const response = await authApi.me();
      return response.data;
    } catch (e) {
      const err = e as AxiosError;
      return rejectWithValue(err.message);
    }
  }
);

export const slice = createSlice({
  name: 'app',
  initialState: {
    isInitialize: false,
  },
  reducers: {
    setIsInitialize(state, action) {
      state.isInitialize = action.payload;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [initializeApp.fulfilled.type]: (state) => {
      state.isInitialize = true;
    },
  },
});

export const appReducer = slice.reducer;

export const { setIsInitialize } = slice.actions;
