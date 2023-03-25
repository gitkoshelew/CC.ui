import { Box } from '@mui/material';
import React, { useCallback, useRef, useState } from 'react';
import { Tabs } from '../commonStyles';
import { QuestionTabsItem } from './QuestionTabsItem';
import {
  Difficulty,
  TypeOptions,
} from '../../../../types/CreateQuestionPropsType';

type QuestionTabsType = {
  numberOfQuestions: number;
  activeTab: any;
};

const getNewQuestion = () => ({
  title: '',
  description: '',
  content: {
    options: ['', ''],
    correctAnswer: [],
  },
  difficulty: Difficulty.Easy,
  timer: 0,
  type: TypeOptions.single,
  topicId: 0,
  moderationId: null,
});
export const QuestionTabs = ({
  numberOfQuestions,
  activeTab,
}: QuestionTabsType) => {
  const amountOfQuestionsTabs = Array.from(
    { length: numberOfQuestions },
    (_, i) => i
  );
  const tabsRef = useRef<HTMLDivElement>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [questions, setQuestions] = useState([{ ...getNewQuestion() }]);

  const currentQuestion = questions[currentQuestionIndex] || {
    ...getNewQuestion(),
  };

  const handlerCurrentQuestion = useCallback(
    (_: any, id: number) => {
      if (
        (!currentQuestion.title && id > questions.length - 1) ||
        id - questions.length > 0
      ) {
        // setIsModalVisible(true);
        return;
      }

      setCurrentQuestionIndex(id);
    },
    [currentQuestion.title, questions.length]
  );

  return (
    <Box sx={{ padding:'0.5rem', borderRadius: '1rem', backgroundColor: '' }}>
      <Tabs ref={tabsRef}>
        {amountOfQuestionsTabs.map((id) => (
          <QuestionTabsItem
            key={id}
            onClick={handlerCurrentQuestion}
            questionId={id}
            isActive={activeTab === id}
            isCompleted={questions.length > numberOfQuestions}
            index={id}
          />
        ))}
      </Tabs>
    </Box>
  );
};
