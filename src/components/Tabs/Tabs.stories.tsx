import React from 'react';
import { Story } from '@storybook/react';
import { TabsProps } from '@mui/material/Tabs';
import TabsComponent from './Tabs';
import Tab from '@mui/material/Tab';

export default {
  title: 'Tabs',
  component: TabsComponent,
};

const Template: Story<TabsProps> = (args) => <TabsComponent {...args} />;

export const Tabs = Template.bind({});
Tabs.args = {
  children: (
    <>
      <Tab label='test1' />
    </>
  ),
};
