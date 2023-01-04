import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Timer } from '../../components/Timer/Timer';

export default {
  title: 'Organism/Timer',
  component: Timer,
} as ComponentMeta<typeof Timer>;

const Template: ComponentStory<typeof Timer> = (args) => <Timer {...args} />;

export const TimeWithMinutes = Template.bind({});

TimeWithMinutes.args = {
  timeDefault: { minutes: '20', seconds: '00' },
};
