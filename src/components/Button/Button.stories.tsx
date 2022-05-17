import React from 'react';
import { Story } from '@storybook/react';
import { ButtonProps } from './Button';
import FlenzrButton from './Button';

export default {
  title: 'Button',
  component: FlenzrButton,
};

const Template: Story<ButtonProps> = (args) => <FlenzrButton {...args} />;

export const Text = Template.bind({});
Text.args = {
  children: 'Text',
  variant: 'text',
};

export const Contained = Template.bind({});
Contained.args = {
  children: 'Contained',
  variant: 'contained',
};

export const Outlined = Template.bind({});
Outlined.args = {
  children: 'Outlined',
  variant: 'outlined',
};
