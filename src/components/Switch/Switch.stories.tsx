import React from 'react';
import { Story } from '@storybook/react';
import { SwitchProps } from '@mui/material/Switch';
import SwitchComponent from './Switch';

export default {
  title: 'Switch',
  component: SwitchComponent,
};

const Template: Story<SwitchProps> = (args) => <SwitchComponent {...args} />;

export const Switch = Template.bind({});
Switch.args = {
  checked: true,
};
