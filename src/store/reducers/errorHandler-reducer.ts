import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { AlertColor } from '@mui/material/Alert/Alert';
import { getQuestions } from './questions-reducer';
import { fetchQuizes } from './quizes-reducer';
import { logIn, registration } from './auth-reducer';
import { NotificationType } from '../../Types/NotificationType';

export const slice = createSlice({
  name: 'error',
  initialState: [] as NotificationType[],
  reducers: {
    changeError(state, action: PayloadAction<null | string>) {
      state.noticeText = action.payload;
    },
  },

  extraReducers: {
    [HYDRATE]: (state, action) => ({
      ...state,
      ...action.payload.error,
    }),
    [getQuestions.rejected.type]: (state, action) => {
      state.noticeText = action.payload;
    },
    [fetchQuizes.rejected.type]: (state, action) => {
      state.noticeText = action.payload;
    },
    [registration.rejected.type]: (state, action) => {
      state.noticeText = action.payload;
    },
    [logIn.rejected.type]: (state, action) => {
      state.noticeText = action.payload;
    },
    [logIn.fulfilled.type]: (state) => {
      state.noticeText = 'You are authorized';
      state.noticeStatus = 'success';
    },
  },
});

export const errorHandlerReducer = slice.reducer;
export const { changeError } = slice.actions;
