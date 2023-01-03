import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Paper } from '@mui/material';
import { QuestionTabs } from '../../components/common/QuestionTabs/QuestionTabs';
import { questionsData } from '../../Mocs/QuestionTabsMoc';

export default {
  title: 'Organism/Question tabs component',
  component: QuestionTabs,
} as ComponentMeta<typeof QuestionTabs>;

const Template: ComponentStory<typeof QuestionTabs> = (args) => (
  <Paper>
    <QuestionTabs {...args} />
  </Paper>
);

export const QuestionTabsComponent = Template.bind({});

QuestionTabsComponent.args = {
  activeQuestionId: '3',
  questionsData,
};
