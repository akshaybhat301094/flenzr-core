import React from 'react';
import './Switch.css';
import Switch from '@mui/material/Switch';
import { SwitchProps } from '@mui/material/Switch';
import { styled } from '@mui/material/styles';

const CustomSwitch = styled(Switch)<SwitchProps>(({ theme }) => ({}));

const SwitchComponent: React.FC<SwitchProps> = (props) => {
  return <CustomSwitch {...props} />;
};

export default SwitchComponent;
