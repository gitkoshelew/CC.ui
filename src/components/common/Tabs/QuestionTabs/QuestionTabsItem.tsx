import React from 'react';
import { StyledQuestionTabsItem } from './styled';

type QuestionTabsItemPropsType = {
  onClick: (e: React.MouseEvent<HTMLDivElement>, id: string) => void;
  isActive: boolean;
  isCompleted: boolean;
  questionId: string;
  index: number;
};

// Try to destructure, even if there are many props. That makes code more
// clean and readable, as you don't reuse "props" object
export const QuestionTabsItem = React.memo(
  (props: QuestionTabsItemPropsType) => {
    const {
      questionId,
      isCompleted,
      index,
      onClick,
      isActive
    } = props;

    const onClickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
      onClick(e, questionId);
    };

    return (
      <StyledQuestionTabsItem
        onClick={onClickHandler}
        isActive={isActive}
        isCompleted={isCompleted}
      >
        {index + 1}
      </StyledQuestionTabsItem>
    );
  }
);
