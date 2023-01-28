import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getQuestions } from './questions-reducer';

export const slice = createSlice({
  name: 'error',
  initialState: {
    error: null as null | string,
  },
  reducers: {
    changeError(state, action: PayloadAction<null | string>) {
      state.error = action.payload;
    },
  },

  extraReducers: {
    // [HYDRATE]: (state, action) => ({
    //   ...state,
    //   ...action.error,
    // }),
    [getQuestions.rejected.type]: (state, action) => {
      state.error = action.payload;
      console.log(' error-reducer-action', action.payload);
      console.log(' error-reducer-state', state.error);
    },
  },
});

export const errorHandlerReducer = slice.reducer;
export const { changeError } = slice.actions;
