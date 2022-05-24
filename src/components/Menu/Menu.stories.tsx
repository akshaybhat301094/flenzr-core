import React from 'react';
import { Story } from '@storybook/react';
import { MenuProps } from '@mui/material/Menu';
import MenuComponent from './Menu';
import MenuItem from '@mui/material/MenuItem';

export default {
  title: 'Menu',
  component: MenuComponent,
};

const Template: Story<MenuProps> = (args) => <Menu {...args} />;

export const Menu = Template.bind({});
Menu.args = {
  children: (
    <>
      <MenuItem>Profile</MenuItem>
      <MenuItem>My account</MenuItem>
      <MenuItem>Logout</MenuItem>
    </>
  ),
  open: true,
};
