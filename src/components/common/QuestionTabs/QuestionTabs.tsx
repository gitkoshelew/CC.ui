import { Box, Stack } from '@mui/material';
import { useRef, useState } from 'react';
import { QuestionTabsItem } from './styled';
import { QuestionDataType } from '../../../Mocs/QuestionTabsMoc';
import { scrollToCenter } from '../../../utils/scrollToCenter';

type RectangleProgressBarPropsType = {
  activeQuestionId: string;
  questionsData: QuestionDataType[];
};
export const QuestionTabs = (props: RectangleProgressBarPropsType) => {
  const [activeTabId, setActiveTabId] = useState(
    props.activeQuestionId || props.questionsData[0].questionId
  );

  const tabsRef = useRef();

  const onTabClickHandler = (
    e: React.MouseEvent<HTMLDivElement>,
    id: string
  ) => {
    setActiveTabId(id);
    scrollToCenter(e, tabsRef);
  };

  return (
    <Box>
      <Stack
        ref={tabsRef}
        alignItems='center'
        direction='row'
        spacing={2}
        justifyContent='space-between'
        padding={1.2}
        width={1}
        overflow='auto'
        sx={{
          '::-webkit-scrollbar': { width: 0, height: 0 },
        }}
      >
        {props.questionsData.map((el, i) => (
          <QuestionTabsItem
            key={el.questionId}
            onClick={(e) => onTabClickHandler(e, el.questionId)}
            isActive={activeTabId === el.questionId}
            isCompleted={el.isCompleted}
          >
            {i + 1}
          </QuestionTabsItem>
        ))}
      </Stack>
    </Box>
  );
};
