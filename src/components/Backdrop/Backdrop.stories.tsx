import React from 'react';
import { Story } from '@storybook/react';
import { BackdropProps } from '@mui/material/Backdrop';
import BackdropComponent from './Backdrop';

export default {
  title: 'Backdrop',
  component: BackdropComponent,
};

const Template: Story<BackdropProps> = (args) => (
  <BackdropComponent {...args} />
);

export const Backdrop = Template.bind({});
Backdrop.args = {
  children: (
    <>
      <div>This is an alert</div>
    </>
  ),
  open: true,
};
