import React from 'react';
import Dialog from '@mui/material/Dialog';
import './Dialog.css';
import { DialogProps } from '@mui/material/Dialog';
import { styled } from '@mui/material/styles';

const CustomDialog = styled(Dialog)<DialogProps>(({ theme }) => ({}));

const DialogComponent: React.FC<DialogProps> = (props) => {
  return <CustomDialog {...props}>{props.children}</CustomDialog>;
};

export default DialogComponent;
