import { instance } from "./Instance/instance";
import { TopicType } from "../types/CreateQuizType";


export const topicApi = {
  postTopic(title: string) {
    return instance.post<TopicType>(`/topic`, { title });
  },
  getTopic() {
    return instance.get<TopicType[]>(`/topic`);
  },
};