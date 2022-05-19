import React from 'react';
import './RadioGroup.css';
import RadioGroup from '@mui/material/RadioGroup';
import { RadioGroupProps } from '@mui/material/RadioGroup';
import { styled } from '@mui/material/styles';

const CustomRadioGroup = styled(RadioGroup)<RadioGroupProps>(
  ({ theme }) => ({})
);

const Radiogroup: React.FC<RadioGroupProps> = (props) => {
  return <CustomRadioGroup {...props}>{props.children}</CustomRadioGroup>;
};

export default Radiogroup;
