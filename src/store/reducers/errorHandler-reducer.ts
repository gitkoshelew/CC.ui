import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { AlertColor } from '@mui/material/Alert/Alert';
import { v1 } from 'uuid';
import { getQuestions } from './questions-reducer';
import { fetchQuizes } from './quizes-reducer';
import { logIn, registration } from './auth-reducer';
import { NotificationType } from '../../types/NotificationType';

const returnNotice = (message: string, typeOfMessage: AlertColor) => ({
  id: v1(),
  noticeText: message,
  noticeStatus: typeOfMessage,
});

export const slice = createSlice({
  name: 'error',
  initialState: { notices: [] as NotificationType[] },
  reducers: {
    removeNotice(state) {
      state.notices.shift();
    },
    addNot(
      state,
      action: PayloadAction<{ noticeText: string; noticeStatus: AlertColor }>
    ) {
      state.notices.push(
        returnNotice(action.payload.noticeText, action.payload.noticeStatus)
      );
    },
  },

  extraReducers: {
    [HYDRATE]: (state, action) => ({
      ...state,
      ...action.payload.error,
    }),
    [getQuestions.rejected.type]: (state, action) => {
      state.notices.push(returnNotice(action.payload, 'error'));
    },
    [fetchQuizes.rejected.type]: (state, action) => {
      state.notices.push(returnNotice(action.payload, 'error'));
    },
    [registration.rejected.type]: (state, action) => {
      state.notices.push(returnNotice(action.payload, 'error'));
    },
    [logIn.rejected.type]: (state, action) => {
      state.notices.push(returnNotice(action.payload, 'error'));
    },
    [logIn.fulfilled.type]: (state) => {
      state.notices.push(returnNotice('You are authorized', 'success'));
    },
  },
});

export const errorHandlerReducer = slice.reducer;
export const { removeNotice, addNot } = slice.actions;
