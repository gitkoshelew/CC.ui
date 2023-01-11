import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { QuizesType } from '../api/quizesApi';

export const slice = createSlice({
  name: 'quizes',
  initialState: {
    quizes: [] as QuizesType[],
  },
  reducers: {
    fetchQuizesAC(state, action: PayloadAction<QuizesType[]>) {
      // eslint-disable-next-line no-param-reassign
      state.quizes = action.payload;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      console.log('HYDRATE', state, action.payload);
      return {
        ...state,
        ...action.payload.quizzes,
      };
    },
  },
});

export const quizzesReducer = slice.reducer;
export const { fetchQuizesAC } = slice.actions;
