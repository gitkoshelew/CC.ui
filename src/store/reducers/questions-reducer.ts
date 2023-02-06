import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { AxiosError } from 'axios';
import { TestQuestionsType } from '../../Types/TestQuestionsType';
import { questionsApi } from '../../api/questionsApi';

export const getQuestions = createAsyncThunk(
  'questions/getQuestions',
  async (_, { rejectWithValue }) => {
    try {
      const response = await questionsApi.getQuestions();
      return response.data;
    } catch (e) {
      const err = e as AxiosError;
      return rejectWithValue(err.message);
    }
  }
);

export const slice = createSlice({
  name: 'questions',
  initialState: {
    questions: [] as TestQuestionsType[],
    isEmptyQuestions: false,
  },
  reducers: {},
  extraReducers: {
    [HYDRATE]: (state, action) => ({
      ...state,
      ...action.payload.questions,
    }),
    [getQuestions.fulfilled.type]: (state, action) => {
      state.questions = action.payload;
      state.isEmptyQuestions = false;
    },
    [getQuestions.rejected.type]: (state) => {
      state.isEmptyQuestions = true;
    },
  },
});

export const questionsReducer = slice.reducer;
