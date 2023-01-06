import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CircularProgressBar } from '../../components/common/CircularProgressBar/CircularProgressBar';

export default {
  title: 'Organism/Circular progress bar',
  component: CircularProgressBar,
} as ComponentMeta<typeof CircularProgressBar>;

const Template: ComponentStory<typeof CircularProgressBar> = (args) => (
  <CircularProgressBar {...args} />
);

export const CircularProgressBarComponent = Template.bind({});

CircularProgressBarComponent.args = {
  value: 60,
  size: 166,
  fontSize: 'medium',
};
