import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/router';
import { Layout } from '../../components/layout/Layout';
import { ButtonBackHome } from '../../components/common/ButtonBackHome';
import { StylizedPaper } from '../../components/common/StylizedPaper/StylizedPaper';
import { CreateQuiz } from './CreateQuiz/CreateQuiz';
import { CreateQuestion } from './CreateQuestion/CreateQuestion';

export default function NewTest() {
  const [quizId, setQuizId] = useState(false);
  const searchParams = useSearchParams();

  useEffect(() => {
    console.log(searchParams.get('quizId'));
  }, [searchParams]);
  return (
    <Layout>
      <ButtonBackHome />
      <StylizedPaper title='Create test'>
        {quizId ? <CreateQuestion /> : <CreateQuiz />}
      </StylizedPaper>
    </Layout>
  );
}
