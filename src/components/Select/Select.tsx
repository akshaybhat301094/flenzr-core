import React from 'react';
import './Select.css';
import Select from '@mui/material/Select';
import { SelectProps } from '@mui/material/Select';
import { styled } from '@mui/material/styles';

const CustomSelect = styled(Select)<SelectProps>(({ theme }) => ({}));

const SelectComponent: React.FC<SelectProps> = (props) => {
  return <CustomSelect {...props}>{props.children}</CustomSelect>;
};

export default SelectComponent;
