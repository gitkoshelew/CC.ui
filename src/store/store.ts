import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { createWrapper } from 'next-redux-wrapper';
import { quizzesReducer } from './reducers/quizes-reducer';
import { questionsReducer } from './reducers/questions-reducer';
<<<<<<< HEAD
import { difficultyReducer } from './reducers/difficulty-reducer';
=======
>>>>>>> fbb8cd68355f1892ca709871086f3f398800e676
import { errorHandlerReducer } from './reducers/errorHandler-reducer';

const reducers = {
  quizzes: quizzesReducer,
  questions: questionsReducer,
<<<<<<< HEAD
  difficulty: difficultyReducer,
=======
>>>>>>> fbb8cd68355f1892ca709871086f3f398800e676
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

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
