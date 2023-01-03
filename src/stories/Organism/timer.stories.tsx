import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Timer } from '../../components/Timer/Timer';
import { timeDefault } from '../../Mocs/TimerMock';

export const Default = () => <Timer timeDefault={timeDefault} />;

export default {
  title: 'Organism/Timer',
  component: Default,
} as ComponentMeta<typeof Default>;

const Template: ComponentStory<typeof Timer> = (args) => <Timer {...args} />;

export const TimeWithoutMinutes = Template.bind({});

TimeWithoutMinutes.args = {
  timeDefault: { minutes: '20', seconds: '00' },
};

// export const TimeTwentyMinutes = Template.bind({});
//
// TimeTwentyMinutes.args = {
//   timeDefault: { minutes: '20', seconds: '00' },
// };
