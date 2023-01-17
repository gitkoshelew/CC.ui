import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { TestQuestionsType } from '../../Types/TestQuestionsType';

export const slice = createSlice({
  name: 'questions',
  initialState: {
    questions: [] as TestQuestionsType[],
  },
  reducers: {
    fetchQuestionsAC(state, action: PayloadAction<TestQuestionsType[]>) {
      state.questions = action.payload;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => ({
      ...state,
      ...action.payload.questions,
    }),
  },
});

export const questionsReducer = slice.reducer;
export const { fetchQuestionsAC } = slice.actions;
