import { createSlice } from '@reduxjs/toolkit';
import { difficulties } from '../../Mocs/NewTestMoc';

export const slice = createSlice({
  name: 'difficulty',
  initialState: difficulties,
  reducers: {},
});

export const difficultyReducer = slice.reducer;
