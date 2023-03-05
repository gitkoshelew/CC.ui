import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { AxiosError } from 'axios';
import { quizesApi } from '../../api/quizesApi';
import { CardsType } from '../../types/CardTypes';

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
export const getOneQuizes = createAsyncThunk(
  'quizes/getOneQuizesTC',
  async (id: number, { rejectWithValue }) => {
    try {
      const response = await quizesApi.getOneQuizes(id);
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
    quizes: [] as CardsType[],
    oneQuizes: {} as CardsType,
  },
  reducers: {
    fetchQuizesAC(state, action: PayloadAction<CardsType[]>) {
      state.quizes = action.payload;
    },
    postQuizes(state, action: PayloadAction<CardsType[]>) {
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
    [getOneQuizes.fulfilled.type]: (state, action) => {
      state.oneQuizes = action.payload;
    },
  },
});

export const quizesReducer = slice.reducer;
export const { postQuizes } = slice.actions;
