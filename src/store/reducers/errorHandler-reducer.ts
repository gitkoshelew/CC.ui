import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { AlertColor } from '@mui/material/Alert/Alert';
import { getQuestions } from './questions-reducer';
import { fetchQuizes } from './quizes-reducer';
import { registration } from './auth-reducer';

type ErrorInitialState = {
  noticeText: null | string;
  noticeStatus: AlertColor;
};

const initialState: ErrorInitialState = {
  noticeText: null,
  noticeStatus: 'error',
};
export const slice = createSlice({
  name: 'error',
  initialState,
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
  },
});

export const errorHandlerReducer = slice.reducer;
export const { changeError } = slice.actions;
