import React from 'react';
import Menu from '@mui/material/Menu';
import { MenuProps } from '@mui/material/Menu';
import { styled } from '@mui/material/styles';

const CustomMenu = styled(Menu)<MenuProps>(({ theme }) => ({}));

const MenuComponent: React.FC<MenuProps> = (props) => {
  return <CustomMenu {...props}>{props.children}</CustomMenu>;
};

export default MenuComponent;
