import React from 'react';
import Alert from '@mui/material/Alert';
import './Alert.css';
import { AlertProps } from '@mui/material/Alert';
import { styled } from '@mui/material/styles';

const CustomAlert = styled(Alert)<AlertProps>(({ theme }) => ({}));

const AlertComponent: React.FC<AlertProps> = (props) => {
  return <CustomAlert {...props}>{props.children}</CustomAlert>;
};

export default AlertComponent;
