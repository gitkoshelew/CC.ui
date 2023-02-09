import { TestQuestionsType } from '../../types/TestQuestionsType';
import {
  getQuestions,
  questionsReducer,
} from '../../store/reducers/questions-reducer';

test('correct date adding to the initialState ', () => {
  const startState = { questions: [] as TestQuestionsType[] };

  const action = getQuestions.fulfilled(
    [
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
    ],
    ''
  );

  // <Remark>
  // reducer argument is not correct
  const endState = questionsReducer(startState, action);

  expect(endState.questions.length).toBe(2);
  expect(endState.questions[1].title).toBe('Question 2 JavaScript');
});
