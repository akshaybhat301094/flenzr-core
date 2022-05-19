import React from 'react';
import { Story } from '@storybook/react';
import { DialogProps } from '@mui/material/Dialog';
import DialogComponent from './Dialog';
import DialogTitle from '@mui/material/DialogTitle';

export default {
  title: 'Dialog',
  component: DialogComponent,
};

const Template: Story<DialogProps> = (args) => <DialogComponent {...args} />;

export const Dialog = Template.bind({});
Dialog.args = {
  children: (
    <>
      <DialogTitle id='alert-dialog-title'>Dialog test</DialogTitle>
    </>
  ),
  open: true,
};
