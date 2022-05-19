import React from 'react';
import { Story } from '@storybook/react';
import { SelectProps } from '@mui/material/Select';
import SelectComponent from './Select';
import Button from '../Button/Button';

export default {
  title: 'Select',
  component: SelectComponent,
};

const Template: Story<SelectProps> = (args) => <SelectComponent {...args} />;

export const Select = Template.bind({});
Select.args = {
  children: (
    <>
      <div>1</div>
      <div>2</div>
      <div>3</div>
    </>
  ),
  variant: 'filled',
};
