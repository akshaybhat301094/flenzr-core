import React from "react";
import MUITooltip from "@mui/material/Tooltip";
import { TooltipProps } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";

const CustomTooltip = styled(MUITooltip)<TooltipProps>(({ theme }) => ({}));

const Tooltip: React.FC<TooltipProps> = (props) => {
  return <CustomTooltip {...props}>{props.children}</CustomTooltip>;
};

export default Tooltip;
