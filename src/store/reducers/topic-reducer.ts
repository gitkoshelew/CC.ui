import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { AxiosError } from 'axios';
import { quizesApi } from '../../api/quizesApi';
import { TopicType } from '../../types/CreateQuizType';
import { topicApi } from "../../api/topicApi";

export const createTopic = createAsyncThunk(
  'topic/createTopicTC',
  async (titleTopic: string, { rejectWithValue }) => {
    try {
      const response = await quizesApi.postTopic(titleTopic);
      return response.data;
    } catch (e) {
      const err = e as AxiosError;
      return rejectWithValue(err.message);
    }
  }
);

export const getAllTopics = createAsyncThunk(
  'topic/getTopics',
  async (_, { rejectWithValue }) => {
    try {
      const response = await topicApi.getTopic();
      return response.data;
    } catch (e) {
      const err = e as AxiosError;
      return rejectWithValue(err.message);
    }
  }
);

export const slice = createSlice({
  name: 'topic',
  initialState: {
    topic: {} as TopicType,
    topicData: [] as TopicType[],
  },
  reducers: {
    addTopic(state, action: PayloadAction<TopicType>) {
      state.topic = action.payload;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => ({
      ...state,
      ...action.payload.topicData,

    }),
    [createTopic.fulfilled.type]: (state, action) => {
      state.topic = action.payload;
    },
    [getAllTopics.fulfilled.type]: (state, action) => {
      state.topicData = action.payload;
    }
  },
});

export const topicReducer = slice.reducer;
export const { addTopic } = slice.actions;
