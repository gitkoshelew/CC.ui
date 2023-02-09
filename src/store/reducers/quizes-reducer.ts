import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { AxiosError } from 'axios';
import { QuizType } from '../../components/common/types';
import { quizzesApi } from '../../api/quizzesApi';

export const fetchQuizes = createAsyncThunk(
  'quizzes/getQuizesThunk',
  async (_, { rejectWithValue }) => {
    try {
      const response = await quizzesApi.getQuizzes();
      return response.data;
    } catch (e) {
      const err = e as AxiosError;
      return rejectWithValue(err.message);
    }
  }
);

export const slice = createSlice({
  name: 'quizzes',
  initialState: {
    quizzes: [] as QuizType[],
  },
  reducers: {
    // <Remark>
    // naming is inconsistent. AC or Ac?
    // What does it mean?
    fetchQuizesAC(state, action: PayloadAction<QuizType[]>) {
      state.quizzes = action.payload;
    },
    postQuizesAc(state, action: PayloadAction<QuizType[]>) {
      state.quizzes = action.payload;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => ({
      ...state,
      ...action.payload.quizzes,
    }),
    [fetchQuizes.fulfilled.type]: (state, action) => {
      state.quizzes = action.payload;
    },
  },
});

export const quizzesReducer = slice.reducer;
export const { fetchQuizesAC, postQuizesAc } = slice.actions;
