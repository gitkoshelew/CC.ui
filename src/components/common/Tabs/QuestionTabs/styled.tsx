import { styled } from '@mui/material';

type QuestionTabsItemType = {
  isActive: boolean;
  isCompleted: boolean;
};

// <Remark>
// put one enter after each type, function declaration, block and etc.
export const StyledQuestionTabsItem = styled('div')<QuestionTabsItemType>(
  ({ theme, isActive, isCompleted }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 28,
    minWidth: 28,
    flexGrow: 'initial',
    width: 28,
    fontSize: 12,
    border: '1px solid transparent',
    borderRadius: 50,
    position: 'relative',
    cursor: 'pointer',
    transition: '0.2s',
    ...(isCompleted && {
      borderColor: 'rgba(0, 0, 0, 0.1)',
      backgroundColor: theme.palette.background.default,
    }),
    ...(isActive && {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.secondary.contrastText,
      pointerEvents: 'none',
    }),
    '&:hover': {
      borderColor: theme.palette.background.default,
    },
  })
);
