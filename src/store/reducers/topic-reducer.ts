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

export const getTopics = createAsyncThunk(
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

// const getOptions = async () => {
//   setIsLoading(true);
//   try {
//     const response = await fetch('http://localhost:5000/api/topic');
//     const getTopics = await response.json();
//     setTopics(getTopics);
//   } catch (error) {
//     console.error(error);
//   }
//   setIsLoading(false);
// };

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
      ...action.payload.topic,
    }),
    [createTopic.fulfilled.type]: (state, action) => {
      state.topic = action.payload;
    },
  },
});

export const topicReducer = slice.reducer;
export const { addTopic } = slice.actions;
