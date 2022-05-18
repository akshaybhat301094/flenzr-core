import React from "react";
import "./Button.css";
import MUIButton from "@mui/material/Button";
import { ButtonProps } from "@mui/material/Button";
import { styled } from "@mui/material/styles";

const CustomButton = styled(MUIButton)<ButtonProps>(({ theme }) => ({}));

const Button: React.FC<ButtonProps> = (props) => {
  return <CustomButton {...props}>{props.children}</CustomButton>;
};

export default Button;
