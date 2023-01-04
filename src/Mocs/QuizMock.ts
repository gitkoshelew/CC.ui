export type TestQuestionsType = {
  id: number;
  title: string;
  isDone: boolean;
};
export const testQuestions: TestQuestionsType[] = [
  {
    id: 1,
    title: 'document.getElementById("demo").innerHTML = "Hello World!"',
    isDone: false,
  },
  {
    id: 2,
    title: 'document.getElement("p").innerHTML = "Hello World!"',
    isDone: false,
  },
  {
    id: 3,
    title: 'document.getElementByName("p").innerHTML = "Hello World!"',
    isDone: false,
  },
  { id: 4, title: 'demo.innerHTML = "Hello World!"', isDone: true },
];
