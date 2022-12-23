import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentStory } from '@storybook/react';
import { Header } from '../../components/layout/header/Header';

export default {
  title: 'Organism/Header',
  component: Header,
};

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const HeaderComponent = Template.bind({});

HeaderComponent.args = {
  headerType: 'full',
};
