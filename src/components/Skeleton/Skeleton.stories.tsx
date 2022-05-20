import React from 'react';
import { Story } from '@storybook/react';
import { SkeletonProps } from '@mui/material/Skeleton';
import SkeletonComponent from './Skeleton';

export default {
  title: 'Skeleton',
  component: SkeletonComponent,
};

const Template: Story<SkeletonProps> = (args) => (
  <SkeletonComponent {...args} />
);

export const Skeleton = Template.bind({});
Skeleton.args = {
  variant: 'rectangular',
  width: 210,
  height: 118,
};
