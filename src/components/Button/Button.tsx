import React from 'react';
import './Button.css';
import Button from '@mui/material/Button';

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant: 'text' | 'contained' | 'outlined';
}

const FlenzrButton: React.FC<ButtonProps> = ({ children, variant }) => {
  return <Button variant={variant}>{children}</Button>;
};

export default FlenzrButton;
