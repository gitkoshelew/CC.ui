import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { QuestionTabs } from '../../components/common/Tabs/QuestionTabs/QuestionTabs';
import { questionsData } from '../../Mocs/QuestionTabsMoc';

export default {
  title: 'Organism/Question tabs component',
  component: QuestionTabs,
} as ComponentMeta<typeof QuestionTabs>;

const Template: ComponentStory<typeof QuestionTabs> = (args) => (
  <QuestionTabs {...args} />
);

export const QuestionTabsComponent = Template.bind({});

QuestionTabsComponent.args = {
  activeQuestionId: '3',
  questionsData,
};
