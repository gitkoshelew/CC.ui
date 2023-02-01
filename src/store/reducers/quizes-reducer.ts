import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { AxiosError } from 'axios';
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
    postQuizesAC(state, action: PayloadAction<QuizesType[]>) {
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
export const { fetchQuizesAC, postQuizesAC } = slice.actions;

export const postQuizes = createAsyncThunk(
  'quizes/postQuizesThunk',
  async (arg, { rejectWithValue }) => {
    try {
      const postRes = await quizesApi.postQuizes();
      return postQuizesAC(postRes.data);
    } catch (e) {
      const error = e as AxiosError;
      return rejectWithValue(error.message);
    }
  }
);
