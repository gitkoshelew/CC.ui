import React from 'react';
import { StyledQuestionTabsItem } from './styled';

type QuestionTabsItemPropsType = {
  onClick: (e: React.MouseEvent<HTMLDivElement>, id: string) => void;
  isActive: boolean;
  isCompleted: boolean;
  questionId: string;
  index: number;
};
export const QuestionTabsItem = React.memo(
  (props: QuestionTabsItemPropsType) => {
    const onClickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
      props.onClick(e, props.questionId);
    };

    return (
      <StyledQuestionTabsItem
        onClick={onClickHandler}
        isActive={props.isActive}
        isCompleted={props.isCompleted}
      >
        {props.index + 1}
      </StyledQuestionTabsItem>
    );
  }
);
