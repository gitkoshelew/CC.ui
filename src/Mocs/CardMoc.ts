// date for CardsQuizes

import { TypeOptions } from '../types/TestQuestionsType';

export const cards = [
  {
    id: 1,
    title: 'General question about Node.js1',
    comment: 'comment',
    creationDate: '12',
    description: 'descr',
    authorId: 1,
    topic: {
      id: 1,
      title: 'title',
    },
    author: {
      id: 1,
      name: 'name',
      surname: 'surname',
      email: '111@qq.qq',
      nickname: 'nick',
      password: '111',
      status: null,
    },
    question: [
      {
        id: 1,
        title: 'title',
        content: {
          options: ['1', '2'],
          correctAnswer: ['1', '2'],
        },
        type: TypeOptions.single,
        difficulty: 'dif',
        description: 'descr',
        timer: 10,
        topicId: 1,
        moderationId: 1,
        moderation: {
          id: 1,
          comment: 'comm',
          status: 'status',
        },
      },
    ],
  },
];
