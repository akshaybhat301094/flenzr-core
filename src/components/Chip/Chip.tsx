import React from "react";
import MUIChip from "@mui/material/Chip";
import { ChipProps } from "@mui/material";
import { styled } from "@mui/material/styles";

const CustomChip = styled(MUIChip)<ChipProps>(({ theme }) => ({}));

const Chip: React.FC<ChipProps> = (props) => {
  return <CustomChip {...props}>{props.children}</CustomChip>;
};

export default Chip;
