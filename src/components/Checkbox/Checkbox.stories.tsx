import React from 'react';
import { Story } from '@storybook/react';
import { CheckboxProps } from '@mui/material/Checkbox';
import CheckBox from './Checkbox';

export default {
  title: 'Checkbox',
  component: CheckBox,
};

const Template: Story<CheckboxProps> = (args) => <CheckBox {...args} />;

export const Checkbox = Template.bind({});
Checkbox.args = {
  checked: true,
};
