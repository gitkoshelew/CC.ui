import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

// export const getQuestions = createAsyncThunk(
//   'questions/getQuestions',
//   async () => {
//     const response = await questionsApi.getQuestions();
//     return response.data;
//   }
// );

export const slice = createSlice({
  name: 'error',
  initialState: {
    // questions: [] as TestQuestionsType[],
    error: null as null | string,
  },
  reducers: {},
  extraReducers: {
    // [HYDRATE]: (state, action) => ({
    //   ...state,
    //   ...action.payload.questions,
    // }),
  },
});

export const errorHandlerReducer = slice.reducer;
