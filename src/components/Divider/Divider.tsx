import React from "react";
import MUIDivider from "@mui/material/Divider";
import { DividerProps } from "@mui/material/Divider";
import { styled } from "@mui/material/styles";

const CustomDivider = styled(MUIDivider)<DividerProps>(({ theme }) => ({}));

const Divider: React.FC<DividerProps> = (props) => {
  return <CustomDivider {...props}>{props.children}</CustomDivider>;
};

export default Divider;
