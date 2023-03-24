import React from 'react';
import { AppState } from './store';
import { createTopic } from './reducers/topic-reducer';

export const selectOneQuizes = (state: AppState) => state.quizes.oneQuizes;
export const selectResulData = (state: AppState) => state.resultData.result;
export const selectTopic = (state: AppState) => state.topics.topic;
