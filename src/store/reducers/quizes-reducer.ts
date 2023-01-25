import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { QuizesType } from '../../components/common/types';
import { quizesApi } from '../../api/quizesApi';

export const fetchQuizes = createAsyncThunk(
  'quizes/getQuizesThunk',
  async () => {
    const response = await quizesApi.getQuizes();
    return response.data;
  }
);

export const slice = createSlice({
  name: 'quizes',
  initialState: {
    quizes: [] as QuizesType[],
  },
  reducers: {
    fetchQuizesAC(state, action: PayloadAction<QuizesType[]>) {
      state.quizes = action.payload;
    },
    postQuizesAc(state, action: PayloadAction<QuizesType[]>) {
      state.quizes = action.payload;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => ({
      ...state,
      ...action.payload.quizes,
    }),
    [fetchQuizes.fulfilled.type]: (state, action) => {
      state.quizes = action.payload;
    },
  },
});

export const quizzesReducer = slice.reducer;
export const { fetchQuizesAC, postQuizesAc } = slice.actions;
