import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import './Backdrop.css';
import { BackdropProps } from '@mui/material/Backdrop';
import { styled } from '@mui/material/styles';

const CustomBackdrop = styled(Backdrop)<BackdropProps>(({ theme }) => ({}));

const BackdropComponent: React.FC<BackdropProps> = (props) => {
  return <CustomBackdrop {...props}>{props.children}</CustomBackdrop>;
};

export default BackdropComponent;
