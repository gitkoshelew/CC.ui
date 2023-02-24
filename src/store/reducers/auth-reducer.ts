import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { AxiosError } from 'axios';
import { authApi } from '../../api/authApi';
import { LoginFormType, RegistrationFormType } from '../../types/AuthTypes';

export const registration = createAsyncThunk(
  'registration/register',
  async (data: RegistrationFormType, { rejectWithValue }) => {
    try {
      const response = await authApi.registration(data);
      localStorage.setItem('token', response.data.accessToken);
      return response.data.accessToken;
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
      localStorage.setItem('token', response.data.accessToken);
      return response.data.accessToken;
    } catch (e) {
      const err = e as AxiosError;
      return rejectWithValue(err.message);
    }
  }
);
export const logout = createAsyncThunk(
  'auth/logout',
  // eslint-disable-next-line consistent-return
  async (_, { rejectWithValue }) => {
    try {
      localStorage.removeItem('token');
    } catch (e) {
      const err = e as AxiosError;
      return rejectWithValue(err.message);
    }
  }
);

// export const checkAuth = createAsyncThunk(
//   'isAuth/register',
//   async (arg, thunkAPI) => {
//     try {
//       const response = await axios.post(`${API_URL}/auth/refresh-token`);
//       console.log(123);
//       localStorage.setItem('token', response.data.accessToken);
//       return response.data.accessToken;
//     } catch (e) {
//       const err = e as AxiosError;
//       return thunkAPI.rejectWithValue(err.message);
//     }
//   }
// );

export const slice = createSlice({
  name: 'register',
  initialState: {
    token: '',
    auth: false,
  },
  reducers: {
    registerAC(state, action) {
      state.token = action.payload;
    },
    loginAC(state, action) {
      state.token = action.payload;
    },
    checkAuthAC(state) {
      state.auth = true;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => ({
      ...state,
      ...action.payload.token,
    }),
    [registration.fulfilled.type]: (state, action) => {
      state.token = action.payload;
      state.auth = true;
    },
    [logIn.fulfilled.type]: (state, action) => {
      state.token = action.payload;
      state.auth = true;
    },
    // [checkAuth.fulfilled.type]: (state, action) => {
    //   state.auth = true;
    // },
  },
});

export const authReducer = slice.reducer;
export const { registerAC, checkAuthAC } = slice.actions;
