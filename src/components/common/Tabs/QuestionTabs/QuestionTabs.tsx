import { Box } from '@mui/material';
import React, { useCallback, useRef, useState } from 'react';
import { QuestionDataType } from '../../../../Mocs/QuestionTabsMoc';
import { scrollToCenter } from '../../../../utils/scrollToCenter';
import { Tabs } from '../commonStyles';
import { QuestionTabsItem } from './QuestionTabsItem';

type RectangleProgressBarPropsType = {
  activeQuestionId: string;
  questionsData: QuestionDataType[];
};

// <Remark>
// try to always destructure the props
// export const QuestionTabs = (props: RectangleProgressBarPropsType) => {
export const QuestionTabs = ({
  questionsData,
  activeQuestionId,
}: RectangleProgressBarPropsType) => {
  const defaultActiveTabId = activeQuestionId || questionsData[0].questionId;

  const [activeTabId, setActiveTabId] = useState(defaultActiveTabId);

  /*
  Not so readable. It is better to always use one variable inside useState parenthesis

  const [activeTabId, setActiveTabId] = useState(
    props.activeQuestionId || props.questionsData[0].questionId
  ); 
  */

  const tabsRef = useRef<HTMLDivElement>(null);

  const onTabClickHandler = useCallback(
    (e: React.MouseEvent<HTMLDivElement>, id: string) => {
      setActiveTabId(id);
      scrollToCenter(e, tabsRef);
    },
    []
  );

  return (
    <Box>
      <Tabs ref={tabsRef}>
        {questionsData.map(({ questionId, isCompleted }, index) => (
          <QuestionTabsItem
            key={questionId}
            onClick={onTabClickHandler}
            questionId={questionId}
            isActive={activeTabId === questionId}
            isCompleted={isCompleted}
            index={index}
          />
        ))}
      </Tabs>
    </Box>
  );
};
