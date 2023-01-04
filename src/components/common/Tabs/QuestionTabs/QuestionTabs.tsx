import { Box } from '@mui/material';
import React, { useCallback, useRef, useState } from 'react';
import { QuestionTabsItem } from './styled';
import { QuestionDataType } from '../../../../Mocs/QuestionTabsMoc';
import { scrollToCenter } from '../../../../utils/scrollToCenter';
import { Tabs } from '../commonStyles';

type RectangleProgressBarPropsType = {
  activeQuestionId: string;
  questionsData: QuestionDataType[];
};
export const QuestionTabs = (props: RectangleProgressBarPropsType) => {
  const [activeTabId, setActiveTabId] = useState(
    props.activeQuestionId || props.questionsData[0].questionId
  );

  const tabsRef = useRef<HTMLDivElement>(null);

  const onTabClickHandler = (
    e: React.MouseEvent<HTMLDivElement>,
    id: string
  ) => {
    setActiveTabId(id);
    scrollToCenter(e, tabsRef);
  };

  const renderQuestionTabsItem = useCallback(
    ({ questionId, isCompleted }: QuestionDataType, index: number) => (
      <QuestionTabsItem
        key={questionId}
        onClick={(e) => onTabClickHandler(e, questionId)}
        isActive={activeTabId === questionId}
        isCompleted={isCompleted}
      >
        {index + 1}
      </QuestionTabsItem>
    ),
    [activeTabId]
  );

  return (
    <Box>
      <Tabs ref={tabsRef}>
        {props.questionsData.map(renderQuestionTabsItem)}
      </Tabs>
    </Box>
  );
};
