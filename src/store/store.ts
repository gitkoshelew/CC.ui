// eslint-disable-next-line import/no-extraneous-dependencies
import { combineReducers, configureStore } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-extraneous-dependencies
import { TypedUseSelectorHook, useSelector } from 'react-redux';
// eslint-disable-next-line import/extensions
import { createWrapper } from 'next-redux-wrapper';
import { quizzesReducer } from './quizes-reducer';

const reducers = {
  quizzes: quizzesReducer,
};

const reducer = combineReducers(reducers);

export const makeStore = () =>
  configureStore({
    reducer,
  });

export type AppState = ReturnType<AppStore['getState']>;
export type AppStore = ReturnType<typeof makeStore>;

export const wrapper = createWrapper<AppStore>(makeStore);

export const useAppSelector: TypedUseSelectorHook<AppStore> = useSelector;
