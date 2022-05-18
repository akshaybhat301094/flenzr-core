import React from "react";
import MUIButtonGroup from "@mui/material/ButtonGroup";
import { ButtonGroupProps } from "@mui/material/ButtonGroup";

const ButtonGroup: React.FC<ButtonGroupProps> = (props) => {
  return <MUIButtonGroup {...props}>{props.children}</MUIButtonGroup>;
};

export default ButtonGroup;
