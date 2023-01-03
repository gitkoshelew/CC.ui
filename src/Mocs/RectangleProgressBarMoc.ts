import { TabColorType } from '../components/common/Tabs/RectangleProgressTabs/styled';

export type TabsDataType = {
  questionId: string;
  color?: TabColorType;
};

export const tabsData: TabsDataType[] = [
  {
    questionId: '1',
    color: 'secondary',
  },
  {
    questionId: '2',
  },
  {
    questionId: '3',
    color: 'error',
  },
  {
    questionId: '4',
    color: 'secondary',
  },
  {
    questionId: '5',
    color: 'secondary',
  },
  {
    questionId: '6',
  },
  {
    questionId: '7',
    color: 'secondary',
  },
  {
    questionId: '8',
    color: 'secondary',
  },
  {
    questionId: '9',
    color: 'error',
  },
  {
    questionId: '10',
    color: 'secondary',
  },
];
