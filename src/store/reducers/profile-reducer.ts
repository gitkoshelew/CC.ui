import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { ProfileDataType } from '../../Types/ProfileTypes';
import { initializeApp } from './app-reducer';

export const slice = createSlice({
  name: 'profile',
  initialState: {
    profileData: {} as ProfileDataType,
  },
  reducers: {
    setProfileData(state, action) {
      state.profileData = action.payload;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [initializeApp.fulfilled.type]: (state, action) => {
      state.profileData = action.payload;
    },
  },
});

export const profileReducer = slice.reducer;
export const { setProfileData } = slice.actions;
