import React from 'react';
import { Story } from '@storybook/react';
import { TextFieldProps } from '@mui/material/TextField';
import TextFieldComponent from './TextField';

export default {
  title: 'TextField',
  component: TextFieldComponent,
};

const Template: Story<TextFieldProps> = (args) => (
  <TextFieldComponent {...args} />
);

export const TextField = Template.bind({});
TextField.args = {
  defaultValue: '123',
};
