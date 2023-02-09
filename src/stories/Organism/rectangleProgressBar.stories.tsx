import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { RectangleProgressTabs } from '../../components/common/Tabs/RectangleProgressTabs/RectangleProgressTabs';
import { tabsData } from '../../Mocs/RectangleProgressBarMoc';

export default {
  title: 'Organism/RectangleProgressTabs',
  component: RectangleProgressTabs,
} as ComponentMeta<typeof RectangleProgressTabs>;

const Template: ComponentStory<typeof RectangleProgressTabs> = (args) => (
  <RectangleProgressTabs {...args} />
);

export const RectangleProgressTabsComponent = Template.bind({});

RectangleProgressTabsComponent.args = {
  isTabsStatusHidden: false,
  initialActiveTabId: '1',
  tabsData,
};
