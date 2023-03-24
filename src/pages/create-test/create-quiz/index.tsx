import { SubmitHandler } from 'react-hook-form';
import { useRouter } from 'next/router';
import axios from 'axios';
import { CreateQuizType } from '../../../types/CreateQuizType';
import { quizesApi } from '../../../api/quizesApi';
import { CreateQuizContainer } from './CreateQuizContainer';

const CreateQuiz = () => {
  const router = useRouter();
  const onSubmitQuiz: SubmitHandler<CreateQuizType> = async (quizData) => {
    const { numberOfQuestions } = quizData;
    const responseTopic = await axios
      .get('http://localhost:5000/api/topic')
      .then(
        (response: {
          data: {
            length: number;
            id: number;
            title: string;
          };
        }) => response.data[response.data.length - 1].id
      )
      .catch((error) => 1);
    const payload = {
      ...quizData,
      numberOfQuestions: null,
      topicId: responseTopic,
      creationDate: new Date().toISOString(),
    };

    try {
      const response = await quizesApi.postQuizes(payload);
      const quizId = await response.data.id;
      router.push({
        pathname: '/create-test/create-question',
        query: {
          numberOfQuestions: +numberOfQuestions,
          topicId: responseTopic,
          quizId,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };
  return <CreateQuizContainer onSubmit={onSubmitQuiz} />;
};

export default CreateQuiz;
