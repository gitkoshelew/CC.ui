import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { AxiosError } from 'axios';
import { QuizesType } from '../../components/common/types';
import { quizesApi } from '../../api/quizesApi';

export const fetchQuizes = createAsyncThunk(
  'quizes/getQuizesThunk',
  async (_, { rejectWithValue }) => {
    try {
      const response = await quizesApi.getQuizes();
      return response.data;
    } catch (e) {
      const err = e as AxiosError;
      return rejectWithValue(err.message);
    }
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
