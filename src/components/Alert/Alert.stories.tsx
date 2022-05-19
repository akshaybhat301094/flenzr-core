import React from 'react';
import { Story } from '@storybook/react';
import { AlertProps } from '@mui/material/Alert';
import AlertComponent from './Alert';

export default {
  title: 'Alert',
  component: AlertComponent,
};

const Template: Story<AlertProps> = (args) => <AlertComponent {...args} />;

export const Alert = Template.bind({});
Alert.args = {
  children: (
    <>
      <div>This is an alert</div>
    </>
  ),
  color: 'error',
};
