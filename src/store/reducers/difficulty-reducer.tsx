import { createSlice } from '@reduxjs/toolkit';

const enum difficultyEnum {
  Easy = 'Easy' ,
  Medium = 'Medium',
  Hard = 'Hard',
};

export const slice = createSlice({
  name: 'difficulty',
  initialState: difficultyEnum,
  reducers: {},
});
export const difficultySelector = {
  difficultyItems: (state) => state.difficultyEnum,
};
export const difficultyReducer = slice.reducer;
