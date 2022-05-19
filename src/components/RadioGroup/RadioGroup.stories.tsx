import React from 'react';
import { Story } from '@storybook/react';
import { RadioGroupProps } from '@mui/material/RadioGroup';
import Radiogroup from './RadioGroup';
import Radio from '@mui/material/RadioGroup';

export default {
  title: 'Radio Group',
  component: Radiogroup,
};

const Template: Story<RadioGroupProps> = (args) => <Radiogroup {...args} />;

export const radioGroup = Template.bind({});
radioGroup.args = {
  children: (
    <>
      <Radio />
      <Radio />
      <Radio />
    </>
  ),
  name: 'radio group',
};
