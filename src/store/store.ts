import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { createWrapper } from 'next-redux-wrapper';
import { quizzesReducer } from './reducers/quizes-reducer';
import { questionsReducer } from './reducers/questions-reducer';
import { errorHandlerReducer } from './reducers/errorHandler-reducer';

const reducers = {
  quizzes: quizzesReducer,
  questions: questionsReducer,
  error: errorHandlerReducer,
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
