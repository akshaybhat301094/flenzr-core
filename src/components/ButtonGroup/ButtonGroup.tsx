import React from "react";
import MUIButtonGroup from "@mui/material/ButtonGroup";
import { ButtonGroupProps } from "@mui/material/ButtonGroup";
import { styled } from "@mui/material/styles";

const CustomButtonGroup = styled(MUIButtonGroup)<ButtonGroupProps>(
  ({ theme }) => ({})
);

const ButtonGroup: React.FC<ButtonGroupProps> = (props) => {
  return <CustomButtonGroup {...props}>{props.children}</CustomButtonGroup>;
};

export default ButtonGroup;
