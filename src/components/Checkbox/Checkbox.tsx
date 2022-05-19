import React from 'react';
import './Checkbox.css';
import Checkbox from '@mui/material/Checkbox';
import { CheckboxProps } from '@mui/material/Checkbox';
import { styled } from '@mui/material/styles';

const CustomCheckbox = styled(Checkbox)<CheckboxProps>(({ theme }) => ({}));

const CheckBox: React.FC<CheckboxProps> = (props) => {
  return <CustomCheckbox {...props} />;
};

export default CheckBox;
