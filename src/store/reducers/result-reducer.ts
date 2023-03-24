import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ResultType } from '../../types/TestQuestionsType';

const slice = createSlice({
  name: 'result',
  initialState: {
    result: [] as ResultType[],
  },
  reducers: {
    setStateResult: (state, action: PayloadAction<ResultType>) => {
      state.result = [...state.result, action.payload];
    },
    clearStateResult: (state) => {
      state.result = [];
    },
  },
});

export const resultReducer = slice.reducer;

export const { setStateResult, clearStateResult } = slice.actions;
