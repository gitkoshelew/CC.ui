import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

// export const getQuestions = createAsyncThunk(
//   'questions/getQuestions',
//   async () => {
//     const response = await questionsApi.getQuestions();
//     return response.data;
//   }
// );

export const slice = createSlice({
  // 1:34:00 не забыть удалить эту строку потом
  name: 'error',
  initialState: {
    // questions: [] as TestQuestionsType[],
    error: null as null | string,
  },
  reducers: {
    changeError(state, action: PayloadAction<null | string>) {
      state.error = action.payload;
    },
  },

  extraReducers: {
    // [HYDRATE]: (state, action) => ({
    //   ...state,
    //   ...action.payload.questions,
    // }),
  },
});

export const errorHandlerReducer = slice.reducer;
export const { changeError } = slice.actions;
