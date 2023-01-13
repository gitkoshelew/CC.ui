import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { QuizesType } from '../../components/common/types';

export const slice = createSlice({
  name: 'quizes',
  initialState: {
    quizes: [] as QuizesType[],
  },
  reducers: {
    fetchQuizesAC(state, action: PayloadAction<QuizesType[]>) {
      state.quizes = action.payload;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => ({
      ...state,
      ...action.payload.quizes,
    }),
  },
});

export const quizzesReducer = slice.reducer;
export const { fetchQuizesAC } = slice.actions;
