import { DBModel } from '../types/types';

export const db: DBModel = {
  quizzes: [
    {
      id: 1,
      title: 'General question about Node.js1',
      userName: 'Person_1',
      date: '010101',
      status: 'done',
    },
    {
      id: 2,
      title: 'General question about Node.js2',
      userName: 'Person_2',
      date: '020202',
      status: 'done',
    },
    {
      id: 3,
      title: 'General question about Node.js3',
      userName: 'Person_3',
      date: '030101',
      status: 'done',
    },
    {
      id: 4,
      title: 'General question about Node.js4',
      userName: 'Person_4',
      date: '040101',
      status: null,
    },
    {
      id: 5,
      title: 'General question about Node.js5',
      userName: 'Person_5',
      date: '050101',
      status: null,
    },
    {
      id: 6,
      title: 'General question about Node.js6',
      userName: 'Person_6',
      date: '060101',
      status: null,
    },
    {
      id: 7,
      title: 'General question about Node.js7',
      userName: 'Person_7',
      date: '070101',
      status: 'done',
    },
    {
      id: 8,
      title: 'General question about Node.js8',
      userName: 'Person_8',
      date: '080101',
      status: 'done',
    },
  ],
  questions: [
    {
      id: 1,
      title: 'Question 1 JavaScript',
      content: {
        options: ['Answer1', 'Answer2', 'Answer3', 'Answer4'],
      },
      type: 'One correct answer',
      difficulty: 'Easy',
      description: 'How do you write "Hello World" in an alert box?',
      correctAnswer: 'Answer1',
      topic: 'Theme 2',
    },
    {
      id: 2,
      title: 'Question 2 JavaScript',
      content: {
        options: ['Answer4', 'Answer5', 'Answer6', 'Answer7'],
      },
      type: 'One correct answer',
      difficulty: 'Medium',
      description: 'What is a prototype chain?',
      correctAnswer: 'Answer2',
      topic: 'Theme 2',
    },
    {
      id: 3,
      title: 'Question 3 JavaScript',
      content: {
        options: ['Answer1', 'Answer2', 'Answer3', 'Answer4'],
      },
      type: 'One correct answer',
      difficulty: 'Easy',
      description:
        'What are the possible ways to create objects in JavaScript?',
      correctAnswer: 'Answer1',
      topic: 'Theme 2',
    },
    {
      id: 4,
      title: 'Question 4 JavaScript',
      content: {
        options: ['Answer1', 'Answer2', 'Answer3', 'Answer4'],
      },
      type: 'One correct answer',
      difficulty: 'Hard',
      description: 'What is a unary function?',
      correctAnswer: 'Answer1',
      topic: 'Theme 2',
    },
    {
      id: 5,
      title: 'Question 5 JavaScript',
      content: {
        options: ['Answer1', 'Answer2', 'Answer3', 'Answer4'],
      },
      type: 'One correct answer',
      difficulty: 'Hard',
      description: 'What is the Temporal Dead Zone?',
      correctAnswer: 'Answer4',
      topic: 'Theme 2',
    },
    {
      id: 6,
      title: 'Question 6 JavaScript',
      content: {
        options: ['Answer1', 'Answer2', 'Answer3', 'Answer4'],
      },
      type: 'One correct answer',
      difficulty: 'Medium',
      description:
        'How do you redeclare variables in switch block without an error?',
      correctAnswer: 'Answer3',
      topic: 'Theme 2',
    },
    {
      id: 7,
      title: 'Question 7 JavaScript',
      content: {
        options: ['Answer1', 'Answer2', 'Answer3', 'Answer4'],
      },
      type: 'One correct answer',
      difficulty: 'Easy',
      description: 'What is the reason to choose the name let as a keyword?',
      correctAnswer: 'Answer2',
      topic: 'Theme 2',
    },
    {
      id: 8,
      title: 'Question 8 JavaScript',
      content: {
        options: ['Answer1', 'Answer2', 'Answer3', 'Answer4'],
      },
      type: 'One correct answer',
      difficulty: 'Easy',
      description: 'What is the purpose of the let keyword?',
      correctAnswer: 'Answer2',
      topic: 'Theme 2',
    },
    {
      id: 9,
      title: 'Question 9 JavaScript',
      content: {
        options: ['Answer1', 'Answer2', 'Answer3', 'Answer4'],
      },
      type: 'One correct answer',
      difficulty: 'Easy',
      description: 'What is a pure function?',
      correctAnswer: 'Answer1',
      topic: 'Theme 2',
    },
    {
      id: 10,
      title: 'Question 10 JavaScript',
      content: {
        options: ['Answer1', 'Answer2', 'Answer3', 'Answer4'],
      },
      type: 'One correct answer',
      difficulty: 'Easy',
      description: 'What is the currying function?',
      correctAnswer: 'Answer3',
      topic: 'Theme 2',
    },
  ],
};
