import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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

export type ResultType = {
  id: number;
  questionStatus: 'default' | 'active' | 'right' | 'error';
  answer: string;
};
