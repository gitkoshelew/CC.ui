import {
  createAsyncThunk,
  createSlice,
  Dispatch,
  PayloadAction,
} from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { QuizesType } from '../../components/common/types';
import { quizesApi } from '../../api/quizesApi';
import { authApi, RegistrationType } from '../../api/authApi';

export const registerTC = createAsyncThunk(
  'registration/register',
  async (data: RegistrationType) => {
    const response = await authApi.registration(data);
    console.log(response.data);
    return response.data;
    // return registerAC(response.data))
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
    [registerTC.fulfilled.type]: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const authReducer = slice.reducer;
export const { registerAC } = slice.actions;
