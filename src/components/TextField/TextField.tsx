import React from 'react';
import './TextField.css';
import TextField from '@mui/material/TextField';
import { TextFieldProps } from '@mui/material/TextField';
import { styled } from '@mui/material/styles';

const CustomTextField = styled(TextField)<TextFieldProps>(({ theme }) => ({}));

const TextFieldComponent: React.FC<TextFieldProps> = (props) => {
  return <CustomTextField {...props} />;
};

export default TextFieldComponent;
