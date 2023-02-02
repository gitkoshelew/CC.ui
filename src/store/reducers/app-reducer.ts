import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getQuestions } from './questions-reducer';

export type RequestStatusType = 'loading' | 'succeeded';

// export type setStatusType = ReturnType<typeof setStatus>;

// const initialState = {
//   status: 'loading' as RequestStatusType,
// };

// type InitialStateType = typeof initialState;

export const slice = createSlice({
  name: 'loader',
  initialState: {
    status: 'succeeded' as RequestStatusType,
  },
  reducers: {
    setStatusAC(state, action: PayloadAction<RequestStatusType>) {
      state.status = action.payload;
      console.log(action.payload);
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(getQuestions.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getQuestions.fulfilled, (state) => {
        state.status = 'succeeded';
      }),
});
// export const setStatusAC = (status: RequestStatusType) =>
//   ({ type: 'APP/SET-STATUS', status } as const);
//
// type ActionsType = ReturnType<typeof setStatusAC>;
export const appReducer = slice.reducer;
export const { setStatusAC } = slice.actions;
