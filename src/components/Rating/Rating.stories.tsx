import React from 'react';
import { Story } from '@storybook/react';
import { RatingProps } from '@mui/material/Rating';
import RatingComponent from './Rating';

export default {
  title: 'Rating',
  component: RatingComponent,
};

const Template: Story<RatingProps> = (args) => <RatingComponent {...args} />;

export const Rating = Template.bind({});
Rating.args = {
  defaultValue: 3,
};
