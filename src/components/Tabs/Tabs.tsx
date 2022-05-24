import React from 'react';
import Tabs from '@mui/material/Tabs';
import { TabsProps } from '@mui/material/Tabs';
import { styled } from '@mui/material/styles';

const CustomTabs = styled(Tabs)<TabsProps>(({ theme }) => ({}));

const TabsComponent: React.FC<TabsProps> = (props) => {
  return <CustomTabs {...props}>{props.children}</CustomTabs>;
};

export default TabsComponent;
