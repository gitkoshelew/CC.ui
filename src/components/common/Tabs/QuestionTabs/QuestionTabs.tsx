import { Box } from '@mui/material';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { StyledQuestionTabsItem } from './styled';
import { QuestionDataType } from '../../../../Mocs/QuestionTabsMoc';
import { scrollToCenter } from '../../../../utils/scrollToCenter';
import { Tabs } from '../commonStyles';
import { QuestionTabsItem } from './QuestionTabsItem';

type RectangleProgressBarPropsType = {
  activeQuestionId: string;
  questionsData: QuestionDataType[];
};
export const QuestionTabs = (props: RectangleProgressBarPropsType) => {
  const [activeTabId, setActiveTabId] = useState(
    props.activeQuestionId || props.questionsData[0].questionId
  );

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
        {props.questionsData.map(({ questionId, isCompleted }, index) => (
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
