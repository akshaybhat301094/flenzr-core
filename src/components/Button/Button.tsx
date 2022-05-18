import React from "react";
import "./Button.css";
import MUIButton from "@mui/material/Button";
import { ButtonProps } from "@mui/material/Button";

const Button: React.FC<ButtonProps> = (props) => {
  return <MUIButton {...props}>{props.children}</MUIButton>;
};

export default Button;
