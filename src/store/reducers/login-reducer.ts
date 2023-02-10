import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { AxiosError } from 'axios';
import { authApi, LogInType } from '../../api/authApi';

export const logIn = createAsyncThunk(
  'login/login',
  async (data: LogInType, { rejectWithValue }) => {
    try {
      const response = await authApi.logIn(data);
      console.log('login-reducer', response.data);
      return response.data;
    } catch (e) {
      const err = e as AxiosError;
      return rejectWithValue(err.message);
    }
  }
);

export const slice = createSlice({
  name: 'login',
  initialState: {
    data: {} as LogInType,
  },
  reducers: {
    loginAC(state, action: PayloadAction<LogInType>) {
      state.data = action.payload;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => ({
      ...state,
      ...action.payload.data,
    }),
    [logIn.fulfilled.type]: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const loginReducer = slice.reducer;
export const { loginAC } = slice.actions;
