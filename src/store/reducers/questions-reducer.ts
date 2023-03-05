import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { AxiosError } from 'axios';
import { questionsApi } from '../../api/questionsApi';
import { NewQuestionType } from '../../types/TestQuestionsType';

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
export const getOneCardTC = createAsyncThunk(
  'questions/getQuestions',
  async (id: number, { rejectWithValue }) => {
    try {
      const response = await questionsApi.getOneCard(id);
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
    questions: [] as NewQuestionType[],
    oneCardWithQuestion: {} as NewQuestionType,
    isEmptyQuestions: false,
  },
  reducers: {},
  extraReducers: {
    [HYDRATE]: (state, action) => ({
      ...state,
      ...action.payload.questions,
    }),
    [HYDRATE]: (state, action) => ({
      ...state,
      ...action.payload.oneCardWithQuestion,
    }),
    [getQuestions.fulfilled.type]: (state, action) => {
      state.questions = action.payload;
      state.isEmptyQuestions = false;
    },
    [getOneCardTC.fulfilled.type]: (state, action) => {
      state.oneCardWithQuestion = action.payload;
      state.isEmptyQuestions = false;
    },
    [getQuestions.rejected.type]: (state) => {
      state.isEmptyQuestions = true;
    },
  },
});

export const questionsReducer = slice.reducer;
