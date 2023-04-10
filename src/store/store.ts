import {
  AnyAction,
  combineReducers,
  configureStore,
  ThunkDispatch,
} from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux';
import { createWrapper } from 'next-redux-wrapper';
import createSagaMiddleware from '@redux-saga/core';
import { takeEvery } from '@redux-saga/core/effects';
import { quizzesReducer } from './reducers/quizzes-reducer';
import { questionsReducer } from './reducers/questions-reducer';
import { errorHandlerReducer } from './reducers/errorHandler-reducer';
import { difficultyReducer } from './reducers/difficulty-reducer';
import { authReducer } from './reducers/auth-reducer';
import { profileReducer } from './reducers/profile-reducer';
import { appReducer } from './reducers/app-reducer';
import { resultReducer } from './reducers/result-reducer';
import { topicReducer } from './reducers/topic-reducer';
import { createConnectionSaga } from './sagas/createConnectionSaga';
import { closeConnectionSaga } from './sagas/closeConnectionSaga';

const sagaMiddleware = createSagaMiddleware();

const reducers = {
  quizes: quizzesReducer,
  questions: questionsReducer,
  regis: authReducer,
  error: errorHandlerReducer,
  difficulty: difficultyReducer,
  profile: profileReducer,
  app: appReducer,
  resultData: resultReducer,
  topics: topicReducer,
};

const reducer = combineReducers(reducers);

function* sagas() {
  yield takeEvery('CREATE-CONNECTION', createConnectionSaga);
  yield takeEvery('CLOSE-CONNECTION', closeConnectionSaga);
}

export const makeStore = () => {
  const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(sagaMiddleware),
  });
  sagaMiddleware.run(sagas);
  return store;
};

export type AppState = ReturnType<AppStore['getState']>;
export type AppStore = ReturnType<typeof makeStore>;
export type AppThunkDispatch = ThunkDispatch<AppState, any, AnyAction>;

export const wrapper = createWrapper<AppStore>(makeStore);

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
export const useAppDispatch: () => AppThunkDispatch = useDispatch;
